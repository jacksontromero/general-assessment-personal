<template>
  <div class="fixed inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
      <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-32 align-middle max-w-xl w-full">
        <div class="bg-white px-4 py-8">
          <div class="flex flex-row justify-start w-full">


            <div class="flex-1 grow">
              <form @submit="makePost">

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input required v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username">
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                  </label>
                  <input required v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" type="text" placeholder="My First Post">
                </div>

                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
                    Content
                  </label>
                  <textarea rows="15" required v-model="content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="content" placeholder="A long time ago in a galaxy..."></textarea>
                </div>

                <div class="flex items-center justify-between">
                  <button type="submit" class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Make Post
                  </button>
                </div>
              </form>
              <p class="mt-2 text-xs text-gray-600">Posts may take a few seconds to appear, refresh the page until they do</p>
            </div>


            <div class="grid justify-items-stretch ">
              <CloseButton @close="close()" class="transform -translate-y-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import CloseButton from './CloseButton.vue'

export default {
  name: 'NewPostMenu',
  components: {
    CloseButton,
  },
  data() {
    return {
      username: null,
      title: null,
      content: null,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async makePost(e) {
      // e.preventDefault()
      this.close()

      const data = {
        title: this.title,
        username: this.username,
        content: this.content,
      }

      fetch('https://general-assessment.jacksontromero.workers.dev/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      this.$emit('reloadPosts')
    }
  },
  emits: ['close', 'reloadPosts']
}
</script>