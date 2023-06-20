<template>
  <nav>
    <div class="title-menu">
      Navegação principal
    </div>
    <ul class="menu">
      <li v-for="link in RouterLinks" :key="link.id">
        <router-link :to="{ path: `${link.router}` }">
          <Icon :icon="`carbon:${link.icon}`" />
          {{ link.description }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import RouterLinks from '../../router/links-router';
import { Icon } from '@iconify/vue';

export default {
  name: 'SidebarMenu',
  components: { Icon },
  data() {
    return {
      RouterLinks,
    }
  }
}
</script>

<style lang="scss" scoped>
.title-menu {
  padding: 10px;
  background-color: #1E282C;
  border-bottom: 1px solid #13191b;
  color: #a4a6a7;
}

.menu {
  li {
    a {
      padding: 15px 10px;
      display: flex;
      align-items: center;
      color: #a4a6a7;

      svg {
        margin-right: 10px;
        font-size: 1.3rem;
      }

      &:hover {
        background-color: #1E282C;
        border-left: 3px solid #009acc;
        color: #fff;
        transition: .15s ease-in-out;
      }
    }
  }
}
</style>
