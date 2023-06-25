<template>
  <div class="typography-spacing">
    <h2>
      {{ message_page }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    message_page: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.typography-spacing {
  display: flex;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 1.8rem;
    margin-right: 10px;
  }
}
</style>
