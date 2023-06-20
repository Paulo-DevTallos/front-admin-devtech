<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main-painel">
      <MainHeader />
      <main>
        <Content />
      </main>
      <footer>Footer</footer>
    </div>
  </div>
</template>

<script>
import Content from './Content.vue';
import Sidebar from '../components/Sidebar/index.vue';
import MainHeader from '../components/MainHeader/index.vue';

export default {
  components: { Content, Sidebar, MainHeader },
  name: "DefaultLayout",
}
</script>

<style scoped lang="scss">
// fade effect for transitions between pages
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

// template styles
.wrapper {
	display: flex;
	max-width: 1920px;
	margin: 0 auto;
	height: 100vh;

	.main-painel {
		width: 85%;
    min-height: 100vh;
		overflow-y: auto;
	}
}
</style>
