<template>
  <transition name="fade">
    <RouterView />
  </transition>
</template>

<script>
export default {
  name: "Content",
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
