<template>
  <div class="h-16 items-center text-gray-400 flex flex-row bg-gray-800">
    <div class ="p-2 flex-1 flex flex-row space-x-2">
      <HeaderMenuItem :text="'About'" :link="'https://www.linkedin.com/in/null-pointer-exception/'"></HeaderMenuItem>
      <HeaderMenuItem :text="'Contact'" :link="'mailto:jtromero@andrew.cmu.edu'"></HeaderMenuItem>
    </div>
    <div class="p-2 flex-1 flex flex-row justify-center space-x-2">
      <NewPostButton @showNewPost="showNewPost()"/>
    </div>
    <div class = "p-2 flex-1 flex flex-row justify-end space-x-2">
      <HeaderMenuItem :text="'GitHub'" :link="'https://github.com/jacksontromero'"></HeaderMenuItem>
    </div>

    <!-- <div class="hover:bg-gray-600 flex-auto basis-1/2">1</div>
    <div class="flex-auto basis-1/2">2</div> -->
  </div>
</template>

<script>

import HeaderMenuItem from './HeaderMenuItem.vue'
import NewPostButton from './NewPostButton.vue'
export default {
  name: 'Header',
  components: {
    HeaderMenuItem,
    NewPostButton,
  },
  methods: {
    showNewPost() {
      this.$emit('showNewPost')
    },
  },
  emits: ['showNewPost']
}
</script>
