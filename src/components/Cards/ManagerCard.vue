<template>
  <div class="card-body">
    <div class="icon-container">
      <Icon :icon="`carbon:${icon}`" />
    </div>
    <div class="data-infos">
      <strong>{{ description }}</strong>
      <span>{{ store_data }}</span>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'ManagerCard',
  components: { Icon },
  props: {
    icon: { type: String },
    description: { type: String },
    store_data: { type: [String, Number] }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  display: flex;
  width: 25%;
  height: 97px;
  filter: drop-shadow(-2px 2px 4px #00000023);
  border-radius: 2px;

  .icon-container {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 2.5rem;
      color: #fff;
    }
  }

  .data-infos {
    width: 100%;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;


  }
}
</style>
