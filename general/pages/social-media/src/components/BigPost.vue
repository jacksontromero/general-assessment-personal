<template>
  <div class="fixed inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
      <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-32 align-middle max-w-xl w-full">
        <div class="bg-white px-4 py-8">
          <div class="flex flex-row justify-start">
            <div class="" v-if="post !== undefined">

              
              <div>
                <div class="text-xl font-medium text-black"> {{post.title}} </div>
                <p class="text-sm text-gray-500">{{post.username}}, {{getDateString()}}</p>
              </div>
              <div>
                <p class="mt-3 text-ellipsis text-gray-700"> {{post.content}} </p>
              </div>


            </div>
            <div class="flex-1 grid justify-items-stretch grow ">
              <CloseButton @close="close()" class="transform -translate-y-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Post from './Post.vue'
import CloseButton from './CloseButton.vue'

export default {
  name: 'BigPost',
  props: {
    post: Object,
  },
  components: {
    Post,
    CloseButton,
  },
  methods: {
    close() {
      this.$emit('close')
    },
    getDateString() {
      const d = new Date(this.post.timestamp)

      return d.toDateString();
    },
  },
  emits: ['close']
}
</script>