<template>
  <div class="toast-container" :class="validate_fields ? status : ''">
    <header>
      <div class="message">
        <Icon  icon="carbon:information-filled" />
        <strong>{{ type_error }}</strong>
      </div>
    </header>
    <div class="message-body">
      <span>{{ error_message }}</span>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'ToastStatus',
  components: { Icon },
  props: {
    type_error: { type: String },
    error_message: { type: String },
    validate_fields: { type: Boolean },
    status: { type: String },
  }
}
</script>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  right: -100%;
  width: 300px;
  border-radius: 8px;
  padding: 10px 10px;
  filter: drop-shadow(-2px 2px 5px #00000028);
  transition: 1s ease-in-out;

  header {
    display: flex;
    position: relative;
    padding-bottom: 10px;

    .message {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }

    .close-icon {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }

  .message-body {
    padding-top: 10px;
    border-top: 1px solid #bebebe;
  }
}

.error {
  background: #f8dadf;
  color: #EB1725;
  right: 20px;
  transition: .4s ease-in-out;
}

.warnning {
  background: #fceed2;
  color: rgb(134, 101, 30);
  right: 20px;
  transition: .3s ease-in-out;
}

.success {
  background: #caeed8;
  color: #0D6D5E;
  right: 20px;
  transition: .3s ease-in-out;
}
</style>
