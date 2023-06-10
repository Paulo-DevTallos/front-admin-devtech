<template>
  <div class="base-input">
    <input
      v-bind="$attrs"
      v-model="inputValue"
      :type="inputType"
      v-if="!hideRevellingPassword ? inputType = 'text' : 'password'"
      @blur="handleValue"
    />
    <RevellingPassword
      @toggle="togglePassword"
      v-if="hideRevellingPassword"
      :isPassword="isPasswordVisible"
    />
  </div>
</template>

<script>
import RevellingPassword from '../../../components/atoms/RevellingPassword/index.vue';

export default {
  name: 'BaseInput',
  components: { RevellingPassword },
  emits: ["handleValue"],
  props: {
    currentValue: {
      type: String,
    },
    hideRevellingPassword: {
      type: Boolean,
    },
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
.base-input {
  border: 1px solid #bebebe;
  height: 2rem;
  border-radius: 8px;
  margin-bottom: 8px;
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
</style>-->
