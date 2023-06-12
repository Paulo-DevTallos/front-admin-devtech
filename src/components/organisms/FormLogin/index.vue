<template>
  <form @submit.prevent="$emit('login', employee)">
    <BaseInput
      v-model="employee.employee_email"
      placeholder="E-mail"
    />
    <BaseInput
      v-model="employee.password"
      :hideRevellingPassword="true"
      placeholder="Senha"
    />
    <div class="btn-spacing">
      <MainButton
        class="primary def-btn-format"
        :btn_title="'Login'"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
import BaseInput from '../../../components/molecules/BaseInput/index.vue';
import MainButton from '../../../components/atoms/MainButton/index.vue';

export default {
  name: 'FormLogin',
  emits: ["login"],
  components: { BaseInput, MainButton },
  data() {
    return {
      employee: {
        employee_email: "",
        password: ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-spacing {
  margin-top: 20px;
  text-align: center;
}
</style>
