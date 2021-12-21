/**
 * Default listener that takes in worker events and sends them to handleRequest() to be processed
 */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Origin': '*'
}

/**
 * @returns A response with a JSON string of an array of all posts
 */
const getPosts = async () => {
  //list of all keys
  const value = await MY_KV.list()

  let postArr = []

  //for each key, add JSON to array of posts
  for(post of value.keys) {
    postArr.push(JSON.parse(await MY_KV.get(post.name)))
  }

  //return array of posts
  return new Response(JSON.stringify(postArr), {
    headers: {
      ...corsHeaders,
      'content-type': 'application/json'
    }
  })
}

//checks if a post has the necessary properties
const validPost = post => {
  return(post.hasOwnProperty('title')
  && post.hasOwnProperty('username')
  && post.hasOwnProperty('content'))
}

/**
 * handle requests
 * @param {Request} request
 */
async function handleRequest(request) {

  const { pathname } = new URL(request.url)

  

  if(request.method === "OPTIONS") {
    return new Response("OK", {headers: corsHeaders})
  }

  //if GET, check pathname and return response
  if(request.method === 'GET') {

    //return all posts if pathname valid
    if(pathname === '/posts') {
      return getPosts()
    }

    //else not found
    else {
      return new Response("Not found", {
        headers: {...corsHeaders, 'content-type': 'text/plain'},
        status: 404,
      })
    }
  }

  //else if POST, check pathname and add new post
  else if(request.method === 'POST') {

    //return response indicating new post successful if pathname valid
    if(pathname === '/posts') {
      
      if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(null, {
          status: 415,
          statusText: "Unsupported Media Type",
          headers: corsHeaders,
        })
      }
    
      // Detect parse failures by setting `json` to null.
      let json = await request.json().catch(e => null)
      if (json === null || !validPost(json)) {
        return new Response("JSON parse failure", {
          status: 400,
          statusText: "Bad Request",
          headers: corsHeaders,
        })
      }

      json = {
        ...json,
        timestamp: Date.now(),
      }
    
      await MY_KV.put(json.title, JSON.stringify(json))
      return new Response(JSON.stringify(json), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        }
      })
    
    }
  }

  //default response just in case
  return new Response('Hello worker!', {
    headers: {...corsHeaders, 'content-type': 'text/plain' },
  })
}

//curl -X POST http://127.0.0.1:8787/posts -H "Content-type:application/json" -d "{\"title\":\"Testing timestamps\", \"username\":\"Jackson\", \"content\":\"What time is it?\"}"