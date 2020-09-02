<template lang="pug">
  main.component.is-start
    Alert
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/partials/Start/Altert.vue';

export default {
  name: 'Start',
  computed: {
    ...mapGetters({
      loaded: 'application/loaded',
      loading: 'application/loading',
    }),
  },
  methods: {
    ...mapActions({
      getAppData: 'application/getAppData',
    }),
  },
  mounted() {
    this.getAppData();
  },
  components: {
    Alert,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/shareds.scss';

$this: 'start';

main.component {
  &.is-#{$this} {
    padding: 1.5rem 1rem;
  }
}
</style>
