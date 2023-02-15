<template>
  <header class="text-neutral-800">
    <router-view></router-view>
  </header>
  <Footer v-if="this.$route.name != 'error' && this.$route.name != 'login' && this.$route.name != 'signup'"></Footer>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
</style>
