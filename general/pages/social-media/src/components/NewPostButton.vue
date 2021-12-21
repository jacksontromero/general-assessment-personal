<template>
  <div class="cursor-pointer transition-all hover:text-white hover:bg-gray-900 p-2 rounded-lg">
    <p @click="showNewPost()">New Post</p>
  </div>
</template>

<script>
export default {
  name: 'NewPostButton',
  methods: {
    showNewPost() {
      this.$emit('showNewPost')
    },
  },
  emits: ['showNewPost']
}
</script>