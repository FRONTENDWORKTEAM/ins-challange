<template lang="pug">
  section.component.is-start-segments
    .container-fluid
      .start-segments
        .start-segments__title
          h3 Segments
        .start-segments__segments
          SegmentsItem.start-segments__segments__item(
            v-for="(segment, i) in categories"
            :segment="segment"
            :id="i"
            :key="`StartSegmentItem${i}`")
</template>

<script>
import { mapGetters } from 'vuex';
import SegmentsItem from './SegmentsItem.vue';

export default {
  computed: {
    ...mapGetters({
      categories: 'application/categories',
    }),
  },
  components: {
    SegmentsItem,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/shareds.scss';

$this: 'start-segments';

section.component {
  &.is-#{$this} {
    margin-bottom: 1rem;
    .#{$this} {
      background: #fff;
      border-radius: 0.25rem;
      border: 1px solid $colorBorder;
      &__title {
        padding: 2.25rem 2rem;
        border-bottom: 1px solid $colorBorder;
        h3 {
          font-size: 1rem;
          color: $colorText;
        }
      }
      &__segments {
        display: flex;
        flex-wrap: wrap;
        &__item {
          width: 33.33333%;
          border-bottom: 1px solid $colorBorder;
          border-right: 1px solid $colorBorder;
          &:nth-child(3n+0) {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
