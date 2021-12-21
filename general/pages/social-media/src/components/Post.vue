<template>
  <div class="h-64 flex-auto transition-all duration-500 ease-out transform hover:scale hover:shadow-2xl mb-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
    <div class= "overflow-hidden h-full divide-y font-sans text-left sm:text-left">
      <div>
        <div class="text-xl font-medium text-black"> {{post.title}} </div>
        <p class="text-sm text-gray-500">{{post.username}}, {{getDateString()}}</p>
      </div>
      <div>
        <p class="mt-3 text-ellipsis text-gray-700"> {{post.content}} </p>
      </div>
    </div>
    <ReadMoreButton @enlarge="makeBigPost()"/>
  </div>
</template>

<script>

import ReadMoreButton from './ReadMoreButton.vue'

export default {
  name: 'Post',
  props: {
    post: Object
  },
  components: {
    ReadMoreButton,
  },
  emits: ['enlargeThisPost'],
  methods: {
    getDateString() {
      const d = new Date(this.post.timestamp)

      return d.toDateString();
    },
    makeBigPost() {
      this.$emit("enlargeThisPost", this.post)
    }
  }
}
</script>