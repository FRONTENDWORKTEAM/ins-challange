<template lang="pug">
  main.component.is-create
    template(v-if="loaded")
      template(v-for="(segmentgroup, id) in groups")

        .create--logic(v-if="id !== '1'")
          .btn-group
            input.btn-check(
              :id="`optionGroup${id}GroupLogicAnd`"
              type="radio"
              value="and"
              autocomplete="off"
              :checked="segmentgroup.groupLogic === 'and'"
              @change="handleChangeGroupLogic($event, id)")
            label.btn.btn-primary.is-info.btn-lg(:for="`optionGroup${id}GroupLogicAnd`") And

            input.btn-check(
              :id="`optionGroup${id}GroupLogicOr`"
              type="radio"
              value="or"
              autocomplete="off"
              :checked="segmentgroup.groupLogic === 'or'"
              @change="handleChangeGroupLogic($event, id)")
            label.btn.btn-primary.is-info.btn-lg(:for="`optionGroup${id}GroupLogicOr`") Or

        SegmentGroup(
          :key="`SegmentGroup${id}`"
          :id="id")

      .create--add-new-segment
        .dropdown
          .btn.btn-outline-primary.dropdown-toggle(
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false") Add Segment Group
          ul.dropdown-menu(aria-labelledby="dropdownMenuButton")
            li
              a.dropdown-item(
                v-for="cat in selectedCategories"
                :key="`cat${cat[0]}`"
                @click="handleCreateSegment(cat[0])"
                v-html="cat[1]")
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
      categoriesSelected: 'application/categoriesSelected',
      operators: 'application/operators',
      inputs: 'application/inputs',
      conditions: 'application/conditions',
      groups: 'segmentgroup/groups',
    }),
    selectedCategories() {
      return Object.entries(this.categories).filter((o) => this.categoriesSelected.includes(o[0]));
    },
    categoryId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      getAppData: 'application/getAppData',
      addSegment: 'segmentgroup/addSegment',
      updateGroup: 'segmentgroup/updateGroup',
    }),
    handleCreateSegment(categoryId, groupId) {
      this.addSegment({ categoryId, groupId });
    },
    mountedWorks() {
      this.handleCreateSegment(this.categoryId);
    },
    handleChangeGroupLogic(event, id) {
      this.updateGroup({
        groupId: id,
        group: { ...this.groups[id], groupLogic: event.target.value },
      });
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
    .#{$this} {
      &--logic,
      &--add-new-segment {
        padding: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
