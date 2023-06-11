<template>
  <button v-bind="$attrs" class="def-btn">
    {{ btn_title }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    btn_title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
