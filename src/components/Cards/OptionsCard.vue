<template>
  <div class="card-options">
    <div>
      Meu perfil
    </div>
    <div @click="logout">
      Sair
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsCard',
  props: {
    is_active: { type: Boolean }
  },

  methods: {
    logout() {
      localStorage.clear()

      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-options {
  width: 150px;
  border-radius: 2px;
  filter: drop-shadow(-2px 2px 4px #00000023);
  background: #fff;
  position: fixed;
  top: 68px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  > div {
    padding: 15px;

    &:hover {
      background-color: #ececec;
    }
  }
}

.isActive {
  transition: right 0.3s ease-in-out;
}

</style>
