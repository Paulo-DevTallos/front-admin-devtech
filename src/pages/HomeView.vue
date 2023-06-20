<template>
  <Typography :message_page="'Dashboard'"/>
  <div class="dashboard-container ">
    <ManagerCard
      style="background-color: #00C0EF;"
      :icon="'store'"
      :description="'Itens no estoque'"
      :store_data="50"
    />
    <ManagerCard
      style="background-color: #DD4B39;"
      :icon="'warning'"
      :description="'Itens com estoque baixo'"
      :store_data="20"
    />
    <ManagerCard
      style="background-color: #00A65A;"
      :icon="'user-favorite-alt'"
      :description="'Clientes cadastrados'"
      :store_data="60"
    />
    <ManagerCard
      style="background-color: #F39C12;"
      :icon="'checkmark-outline'"
      :description="'Saídas'"
      :store_data="150"
    />
  </div>
</template>

<script>
import ManagerCard from '../components/Cards/ManagerCard.vue';
import Typography from '../components/Typography.vue';

export default {
  name: 'HomeView',
  components: { Typography, ManagerCard },
  data() {
    return {
      tag: 'h1'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 0 10px;
  display: flex;
  gap: 34px;
  z-index: 0;
}
</style>
