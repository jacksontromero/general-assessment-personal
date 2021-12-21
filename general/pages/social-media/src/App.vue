<template>
  <Header @showNewPost="showNewPostMenu()"/>
  <Posts ref="Posts"/>
  <NewPostMenu @rel="$refs.Posts.fetchPosts()" @close="showNewPostMenu()" v-if="showNewPost"/>
</template>

<script>

import Posts from './components/Posts.vue'
import Header from './components/Header.vue'
import BigPost from './components/BigPost.vue'
import NewPostMenu from './components/NewPostMenu.vue'


export default {
  name: 'App',
  components: {
    Posts,
    Header,
    BigPost,
    NewPostMenu,
  },
  data() {
    return {
      showNewPost: false,
    }
  },
  methods: {
    showNewPostMenu() {
      this.showNewPost = !this.showNewPost
    }
  }
}
</script>