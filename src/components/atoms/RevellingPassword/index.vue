<template>
  <span class="view-eyes" @click="$emit('toggle')">
    <Icon icon="carbon:view" id="view-icon" v-if="isPassword"	/>
		<Icon icon="carbon:view-off" id="view-icon" v-else/>
  </span>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: 'RevellingPassword',
  components: { Icon },
  emits: ["toggle"],
  props: {
    isPassword: {
      type: Boolean,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/mixins/alignment.scss';
.view-eyes {
  @include displayAlignment(flex, center, center);
  width: 10%;
  cursor: pointer;

  svg {
    font-size: .8rem;
  }
}
</style>
