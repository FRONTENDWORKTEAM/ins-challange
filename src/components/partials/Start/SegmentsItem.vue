<template lang="pug">
  router-link.component.is-start-segments-item(to="/")
    span.start-segments-item--wrapper
      span.start-segments-item--title
        Icon.icon(name="segment-1")
        span.title Predictive Segments
      span
        | Target users based on their demographic variables,
        | shopping behaviors and personal interests.
</template>

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
