<template>
  <div class="m-4 grid grid-cols-4 gap-4">
    <div v-for="post in posts" :key="post.title">
      <Post :post="post" @enlargeThisPost="updateBigPost"/>
    </div>
  </div>
  <BigPost @close="toggleBigPost()" v-if="showBigPost" :post="bigPost"/>
</template>

<script>

import Post from './Post.vue'
import BigPost from './BigPost.vue'

export default {
  name: 'Posts',
  components: {
    Post,
    BigPost,
  },
  data() {
    return {
      posts: [],
      bigPost: undefined,
      showBigPost: false,
    }
  },
  methods: {
    async fetchPosts() {
      const res = await fetch('https://general-assessment.jacksontromero.workers.dev/posts')

      const data = await res.json()

      data.sort((x,y) => {return y.timestamp - x.timestamp})

      return data
    },
    updateBigPost(post) {
      this.bigPost = post
      this.toggleBigPost()
    },
    toggleBigPost() {
      this.showBigPost = !this.showBigPost
    }
  },
  async created() {
    this.posts = await this.fetchPosts()
  },
}
</script>

<style scoped>
  
</style>