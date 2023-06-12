<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { socket } from './service/socket/index';

export default defineComponent({
  name: 'App',
  methods: {
    connect() {
      socket.connect()
    }
  }
})
</script>

<style scoped></style>
