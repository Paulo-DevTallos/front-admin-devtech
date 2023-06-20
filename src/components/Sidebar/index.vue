<template>
  <aside class="sidebar-container">
    <div class="image-container">
      <router-link :to="{ name: 'dashboard' }">
        <img :src="logo" alt="Logo DevTech" />
      </router-link>
    </div>
    <div class="profile-status">
      <div class="profile-img">P</div>
      <div class="status">
        <strong>Nome do usuário</strong>
        <small>
          <div></div>
          Online
        </small>
      </div>
    </div>
    <SidebarMenu />
  </aside>
</template>

<script>
import logo from '../../assets/img/logo-dev-tech-nobg.png';
import SidebarMenu from './SidebarMenu.vue';

export default {
  components: { SidebarMenu },
  name: 'Sidebar',
  data() {
    return {
      logo,
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  background: #222D32;
  width: 15%;
  overflow: hidden;
  color: #fff;

  .image-container {
    background: #fff;
    padding: 5px 0;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      img {
        width: 150px;
      }
    }
  }

  .profile-status {
    display: flex;
    padding: 10px;

    .profile-img {
      width: 53px;
      height: 50px;
      background: #009acc;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .status {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      small {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;

        div {
          margin-right: 5px;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background: #0abd0a;
        }
      }
    }
  }
}

</style>
