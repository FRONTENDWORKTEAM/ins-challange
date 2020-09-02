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
