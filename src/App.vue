<template lang="pug">
  #app
    AppIconset
    router-view
</template>

<script>
import AppIconset from './components/layout/AppIconset.vue';

export default {
  components: {
    AppIconset,
  },
};
</script>

<style lang="scss">
@import './styles/vendors.scss';
@import './styles/global.scss';
</style>
