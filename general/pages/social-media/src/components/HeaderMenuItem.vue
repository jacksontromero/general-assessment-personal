<template>
  <div class="transition-all hover:text-white hover:bg-gray-900 p-2 rounded-lg">
    <a :href="link" target="_blank">{{text}}</a>
  </div>

</template>

<script>
export default {
  name: 'HeaderMenuItem',
  props: {
    text: String,
    link: String
  }
}
</script>