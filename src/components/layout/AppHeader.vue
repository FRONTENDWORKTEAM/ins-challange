<template lang="pug">
  header
    AppNavbar
    AppBreadcrumb
    AppHeaderTitle
</template>

<script>
import AppNavbar from './AppNavbar.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppHeaderTitle from './AppHeaderTitle.vue';

export default {
  components: {
    AppNavbar,
    AppBreadcrumb,
    AppHeaderTitle,
  },
};
</script>
