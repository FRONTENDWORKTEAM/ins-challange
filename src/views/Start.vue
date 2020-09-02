<template lang="pug">
  main.component.is-start
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
};
</script>
