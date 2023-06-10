<template>
  <div class="container-page">
    <div class="card-login-form">
      <header class="logo-container">
        <img :src="logo" alt="Logo devtech">
      </header>
      <form @submit.prevent="teste">
        <div class="base-input">
          <input type="text" placeholder="E-mail">
        </div>
        <div class="base-input">
          <input type="password" placeholder="Senha">
        </div>
        <button type="submit">Login</button>
      </form>
      <footer>
        <p>Esqueceu sua senha? clique aqui</p>
      </footer>
    </div>
  </div>
</template>

<script>
import logo from '../assets/img/logo-dev-tech-nobg.png';

export default {
  name: 'LoginView',
  data() {
    return {
      logo: logo,
    }
  },
  methods: {
    teste() {
      console.log('clicou')
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

    .base-input {
      border: 1px solid #bebebe;
      height: 2rem;
      border-radius: 8px;
      margin-bottom: 8px;

      input {
        outline: none;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border: none;
        border-radius: 8px;
        transition: .4s ease-in-out;

        &:focus {
          background-color: #e0f5fc;
        }
      }
    }
  }
}

</style>
