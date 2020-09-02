<template lang="pug">
  header
    AppNavbar
    AppBreadcrumb
</template>

<script>
import AppNavbar from './AppNavbar.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';

export default {
  components: {
    AppNavbar,
    AppBreadcrumb,
  },
};
</script>
