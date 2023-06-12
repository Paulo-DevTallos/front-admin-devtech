<template>
  <div class="view-container">
    <div class="card-login-form">
      <div class="mb-6">
        <img class="w-7/12 m-auto object-center" :src="logo" alt="Logo devtech">
      </div>
      <FormLogin @login="submitLogin"/>
      <!--Criar uma seção para "esqueci a senha"-->
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/organisms/FormLogin/index.vue';
import logo from '../assets/img/logo-dev-tech-nobg.png';

export default {
  name: 'LoginView',
  components: { FormLogin },
  data() {
    return {
      logo: logo,
    }
  },
  methods: {
    submitLogin(employee) {
      this.$store.dispatch("employeeStore/login", employee)
    },
  },
}
</script>

<style lang="scss" scoped>
.view-container {
  @apply flex justify-center sm:bg-primary-blue items-center h-screen;

  .card-login-form {
    @apply sm:bg-white;
    width: 450px;
    padding: 40px;
    border-radius: 12px;
    filter: drop-shadow(-5px 5px 5px #0000002c);
  }
}
</style>
