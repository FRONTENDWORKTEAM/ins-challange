<template lang="pug">
  .component.is-segment-group
    template(
      v-for="(segment, index) in groups[id].conditionList")

      .segment-group--logic(v-if="index !== 0")
        .btn-group
          input.btn-check(
            :id="`optionGroup${id}ConditionAnd`"
            type="radio"
            value="and"
            autocomplete="off"
            :checked="groups[id].conditionLogic === 'and'"
            @change="handleChangeConditionLogic")
          label.btn.btn-primary.is-info.btn-lg(:for="`optionGroup${id}ConditionAnd`") And
          input.btn-check(
            :id="`optionGroup${id}ConditionOr`"
            type="radio"
            value="or"
            autocomplete="off"
            :checked="groups[id].conditionLogic === 'or'"
            @change="handleChangeConditionLogic")
          label.btn.btn-primary.is-info.btn-lg(:for="`optionGroup${id}ConditionOr`") Or

      Segment(
        :key="`SegmentItem${index}`"
        :groupId="id"
        :segmentIndex="index")

    .segment-group--add
      .dropdown
        .btn.btn-outline-primary.dropdown-toggle(
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false") Add Segment
        ul.dropdown-menu(aria-labelledby="dropdownMenuButton")
          li
            a.dropdown-item(
              v-for="cat in selectedCategories"
              :key="`cat${cat[0]}`"
              @click="handleCreateSegment(cat[0], id)"
              v-html="cat[1]")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Segment from './Segment.vue';

export default {
  props: {
    id: {
      type: String,
      required: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      groups: 'segmentgroup/groups',
      categoriesSelected: 'application/categoriesSelected',
      categories: 'application/categories',
    }),
    selectedCategories() {
      return Object.entries(this.categories).filter((o) => this.categoriesSelected.includes(o[0]));
    },
  },
  methods: {
    ...mapActions({
      addSegment: 'segmentgroup/addSegment',
      updateGroup: 'segmentgroup/updateGroup',
    }),
    handleChangeConditionLogic(event) {
      this.updateGroup({
        groupId: this.id,
        group: { ...this.groups[this.id], conditionLogic: event.target.value },
      });
    },
    handleCreateSegment(categoryId, groupId) {
      this.addSegment({ categoryId, groupId });
    },
  },
  components: {
    Segment,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/shareds.scss';

$this: 'segment-group';

.component {
  &.is-#{$this} {
    background: #fff;
    border-radius: 0.25rem;
    border: 1px solid $colorBorder;
    .#{$this} {
      &--add {
        padding: 1.5rem 2rem;
        border-top: 1px solid $colorBorder;
      }
      &--logic {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 0.5rem;
        &:before {
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          margin-top: -1px;
          height: 1px;
          content: '';
          background: $colorBorder;
        }
      }
    }
  }
}
</style>
