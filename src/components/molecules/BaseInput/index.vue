<template>
  <div>
    <input
      v-bind="$attrs"
      v-model="inputValue"
      :type="inputType"
      @blur="handleValue"
      v-if="!handleRevellingPassword ? inputType = 'text' : 'password'"
    />
    <RevellingPassword
      @toggle="togglePassword"
      v-if="hideRevellingPassword"
      :isPassword="isPasswordVisible"
    />
  </div>
</template>

<script>
import RevellingPassword from '@/components/atoms/RevellingPassword/index.vue';

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
