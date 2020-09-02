<template lang="pug">
  #app
    AppIconset
    AppHeader
    router-view
    AppFooter
</template>

<script>
import AppIconset from './components/layout/AppIconset.vue';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  components: {
    AppIconset,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './styles/vendors.scss';
@import './styles/global.scss';
</style>
