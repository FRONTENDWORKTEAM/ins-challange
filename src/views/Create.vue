<template lang="pug">
  main.component.is-create
    template(v-if="loaded")
      SegmentGroup(v-for="(segmentgroup, id) in groups")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SegmentGroup from '../components/partials/Create/SegmentGroup.vue';

export default {
  name: 'Create',
  computed: {
    ...mapGetters({
      loaded: 'application/loaded',
      loading: 'application/loading',
      categories: 'application/categories',
      operators: 'application/operators',
      inputs: 'application/inputs',
      conditions: 'application/conditions',
      groups: 'segmentgroup/groups',
    }),
    categoryId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      getAppData: 'application/getAppData',
      addSegment: 'segmentgroup/addSegment',
    }),
    handleCreateSegment(categoryId, groupId) {
      this.addSegment({ categoryId, groupId });
    },
    mountedWorks() {
      this.handleCreateSegment(this.categoryId);
    },
  },
  async mounted() {
    if (!this.loaded) await this.getAppData();
    this.mountedWorks();
  },
  components: {
    SegmentGroup,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/shareds.scss';

$this: 'create';

main.component {
  &.is-#{$this} {
    padding: 1.5rem 1rem;
  }
}
</style>
