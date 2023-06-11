<template>
  <div class="container-page">
    <div class="card-login-form">
      <div class="logo-container">
        <img :src="logo" alt="Logo devtech">
      </div>
      <FormLogin @teste="login"/>
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
    login(employeeData) {
      console.log(employeeData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/mixins/alignment.scss';
.container-page {
  background-color: #009acc;
  min-height: 100vh;
  @include displayAlignment(flex, center, center);

  .card-login-form {
    background-color: #fff;
    width: 400px;
    padding: 40px;
    border-radius: 12px;
    filter: drop-shadow(-5px 5px 5px #0000002c);

    .logo-container {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;

      img {
        width: 60%;
      }
    }
  }
}

</style>
