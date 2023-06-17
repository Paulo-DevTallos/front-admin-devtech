<template>
  <div class="input-box w-full">
    <div class="base-input">
      <input
        v-bind="$attrs"
        :type="!fiel_email ? inputType : 'email'"
        v-if="!hideRevellingPassword ? inputType = 'text' : 'password'"
        @blur="handleValue"
        v-model="inputValue"
      />
      <RevellingPassword
      @toggle="togglePassword"
      v-if="hideRevellingPassword"
      :isPassword="isPasswordVisible"
      />
    </div>
    <label class="label-input">
      <small>{{ error_message }}</small>
    </label>
  </div>
</template>

<script>
import RevellingPassword from '../../../components/atoms/RevellingPassword/index.vue';

export default {
  name: 'BaseInput',
  components: { RevellingPassword },
  emits: ["handleValue"],
  props: {
    currentValue: { type: String },
    hideRevellingPassword: { type: Boolean },
    error_message: { type: String },
    fiel_email: { type: Boolean },
  },
  data() {
    return {
      inputType: "password",
        inputValue: "",
    }
  },
  computed: {
    isPasswordVisible() {
      return this.inputType === 'text';
    },
  },
  methods: {
    handleValue(newValue) {
      this.$emit("handleValue", newValue);
    },

    togglePassword() {
      return this.inputType = this.isPasswordVisible ? "password" : "text";
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box {
  margin-bottom: 8px;
  .base-input {
    border: 1px solid #bebebe;
    height: 2.3rem;
    border-radius: 8px;
    display: flex;

    &:focus {
      background-color: #e0f5fc;
    }

    input {
      outline: none;
      width: 95%;
      height: 100%;
      padding: 0 10px;
      border: none;
      border-radius: 8px;
      transition: .4s ease-in-out;
      background-color: transparent;
    }
  }

  .label-input {
    color: red;
  }
}
</style>
