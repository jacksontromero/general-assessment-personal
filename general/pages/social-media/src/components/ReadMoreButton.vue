<template>
  <div class="cursor-pointer mt-1 transform translate-x-4 -translate-y-1 text-gray-400 text-sm flex justify-end">
    <p @click="makeBigPost()">Read more</p>
  </div>


  
</template>

<script>
export default {
  name: 'ReadMoreButton',
  methods: {
    makeBigPost() {
      this.$emit('enlarge')
    },
  },
  emits: ['enlarge']
}
</script>