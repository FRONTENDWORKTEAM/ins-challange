<template lang="pug">
  footer.component.is-footer
    .footer--wrapper
      .container-fluid
        .footer--actions
          .footer--actions__item
            a.btn.is-icon-text
              .btn-wrapper
                Icon.icon(name="close")
                span.text Close
          .footer--actions__item
            button.btn.btn-primary(type="button") Save & Next
</template>

<style lang="scss" scoped>
@import '../../styles/shareds.scss';

$this: 'footer';

footer.component {
  &.is-#{$this} {
    height: (1.5rem * 2) + 2.375rem + 0.0625rem; // Vertical padding + content height + border-top
    .#{$this} {
      &--wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-top: 1px solid $colorBorder;
        color: $colorText;
        padding: 1.5rem 1rem;
      }
      &--actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>
