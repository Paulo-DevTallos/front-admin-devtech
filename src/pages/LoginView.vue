<template>
  <div class="view-container">
    <div class="card-login-form">
      <div class="mb-6">
        <img class="w-7/12 m-auto object-center" :src="logo" alt="Logo devtech">
      </div>
      <FormLogin @login="submitLogin"/>
      <!--Criar uma seção para "esqueci a senha"-->
    </div>
    <ToastStatus
      :type_error="typeError"
      :error_message="errorMessage"
      :validate_fields="validateFields"
      :status="typeStatus"
    />
  </div>
</template>

<script>
import FormLogin from '@/components/organisms/FormLogin/index.vue';
import logo from '../assets/img/logo-dev-tech-nobg.png';
import ToastStatus from '@/components/Popups/ToastStatus.vue';

export default {
  name: 'LoginView',
  components: { FormLogin, ToastStatus },
  data() {
    return {
      logo: logo,
      validateFields: false,
      typeError: "",
      errorMessage: "",
      typeStatus: ""
    }
  },
  methods: {
    submitLogin(employee) {
      this.$store.dispatch("employeeStore/login", employee)
        .catch(error => {
          let message = error.response.data.message;

          this.errorMessage = message;
          this.typeError = 'Erro ao realizar o login';
          this.typeStatus = 'error';
          this.validateFields = true;

          setTimeout(() => {
            this.validateFields = !this.validateFields;
          }, 3000)
        })
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
