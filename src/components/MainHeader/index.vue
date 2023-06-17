<template>
  <header>
    <div class="menu-hamburguer">
      <Icon icon="tabler:menu-2" />
    </div>
    <div class="profile">
      <div>P</div>
      <strong>Nome do usuário</strong>
    </div>
  </header>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'MainHeader',
  components: { Icon }
}
</script>

<style lang="scss" scoped>
header {
  height: 68px;
  background-color: #fff;
  filter: drop-shadow(-2px 0 4px #00000025);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-hamburguer {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    &:hover,
    &:active {
      background: #eeeeee;
    }

    svg {
      font-size: 1.5rem;
    }
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;

    &:hover,
    &:active {
      background: #eeeeee;
    }

    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #009acc;
      color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }
}
</style>
