<template lang="pug">
  main.component.is-start
    Alert
    Segments(v-if="loaded")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/partials/Start/Altert.vue';
import Segments from '../components/partials/Start/Segments.vue';

export default {
  name: 'Start',
  computed: {
    ...mapGetters({
      loaded: 'application/loaded',
      loading: 'application/loading',
      categories: 'application/categories',
      operators: 'application/operators',
      inputs: 'application/inputs',
      conditions: 'application/conditions',
    }),
  },
  methods: {
    ...mapActions({
      getAppData: 'application/getAppData',
    }),
  },
  mounted() {
    this.getAppData();
    console.log('categories: ', this.categories,
      'operators: ', this.operators,
      'inputs: ', this.inputs,
      'conditions: ', this.conditions,
      'groupList ', this.groupList);
  },
  components: {
    Alert,
    Segments,
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
