<template>
  <form @submit.prevent="$emit('teste', employee)">
    <BaseInput
      v-model="employee.employee_email"
      :hideRevellingPassword="false"
      placeholder="E-mail"
    />
    <BaseInput
      v-model="employee.password"
      :hideRevellingPassword="true"
      placeholder="Senha"
    />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import BaseInput from '../../../components/molecules/BaseInput/index.vue';

export default {
  name: 'FormLogin',
  components: { BaseInput },
  data() {
    return {
      employee: {
        employee_email: "teste",
        password: "123456"
      }
    }
  }
}
</script>
