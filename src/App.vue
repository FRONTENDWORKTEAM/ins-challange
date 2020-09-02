<template lang="pug">
  #app
    AppIconset
    AppHeader
    router-view
</template>

<script>
import AppIconset from './components/layout/AppIconset.vue';
import AppHeader from './components/layout/AppHeader.vue';

export default {
  components: {
    AppIconset,
    AppHeader,
  },
};
</script>

<style lang="scss">
@import './styles/vendors.scss';
@import './styles/global.scss';
</style>
