<template lang="pug">
  router-link.component.is-start-segments-item(:to="redirectRoute")
    span.start-segments-item--wrapper
      span.start-segments-item--title
        Icon.icon(name="segment-1")
        span.title {{ segment }}
      span
        | Aute esse sunt id do. Anim sit ad ex tempor.
        | Ad dolor sint enim ipsum in irure quis id tempor ad aliqua veniam officia.
        | Officia excepteur ea voluptate duis velit est ullamco pariatur fugiat.
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      categoriesSelected: 'application/categoriesSelected',
    }),
    redirectRoute() {
      return this.categoriesSelected.includes(this.id) ? `/create/${this.id}` : '/';
    },
  },
  props: {
    segment: {
      type: String,
      required: true,
      default: null,
    },
    id: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/shareds.scss';

$this: 'start-segments-item';

.component {
  &.is-#{$this} {
    padding: 2rem;
    color: currentColor;
    text-decoration: none;
    .#{$this} {
      &--title {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 0.5rem;
        .icon {
          color: $colorPrimary;
          height: 1.5rem;
          width: auto;
          margin-right: 0.875rem;
        }
        .title {
          flex-basis: 0;
          flex-grow: 1;
          font-size: 1.125rem;
          margin: 0;
        }
      }
    }
  }
}
</style>
