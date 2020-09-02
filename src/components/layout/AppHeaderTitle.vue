<template lang="pug">
  section.component.is-header-title
    .container-fluid
      .header-title--columns
        .header-title--columns__item.is-title
          h3 Whom to Target?
          p Select one or more user groups to show your personalization.
        .header-title--columns__item.is-controls
          .header-title--control
            label.header-title--control__label.form-label(for="inputHeaderTitleName")
              | Personalization Name
            input.header-title--control__input#inputHeaderTitleName.form-control(
              type="text"
              value="Maven-Test")
</template>

<style lang="scss" scoped>
@import '../../styles/shareds.scss';

$this: 'header-title';

section.component {
  &.is-#{$this} {
    border-bottom: 1px solid $colorBorder;
    .#{$this} {
      &--columns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__item {
          padding: 1.5rem 1rem;
          &.is-title {
            flex-basis: 0;
            flex-grow: 1;
          }
          &.is-controls {
            width: 20rem;
          }
        }
      }
    }
  }
}
</style>
