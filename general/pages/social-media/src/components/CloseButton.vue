<template>
  <p @click="close()" class="cursor-pointer justify-self-end">❌</p>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
    close() {
      this.$emit('close')
    },
  },
  emits: ['close']
}
</script>