<template lang="pug">
  section.component.is-breadcrumb
    .container-fluid
      .breadcrumb--features
        .breadcrumb--features__item.is-back
          a.breadcrumb--back
            Icon.breadcrumb--back__icon(name="arrow-left")
            span.breadcrumb--back__text Personalization Overview
        .breadcrumb--features__item.is-list
          ul.breadcrumb--list
            li.breadcrumb--list__item.is-active
              a
                span.text Segment
                Icon.icon(name="chevron-right")
            li.breadcrumb--list__item
              a
                span.text Rules
                Icon.icon(name="chevron-right")
            li.breadcrumb--list__item
              a
                span.text Design
                Icon.icon(name="chevron-right")
            li.breadcrumb--list__item
              a
                span.text Goals
                Icon.icon(name="chevron-right")
            li.breadcrumb--list__item
              a
                span.text Launch
</template>

<style lang="scss" scoped>
@import '../../styles/shareds.scss';

$this: 'breadcrumb';

section.component {
  &.is-#{$this} {
    background: #fff;
    border-bottom: 1px solid $colorBorder;
    color: $colorText;
    .#{$this} {
      &--features {
        display: flex;
        flex-wrap: wrap;
        &__item {
          padding: 1rem 2rem;
          &.is-back {
            border-right: 1px solid $colorBorder;
          }
          &.is-list {
            flex-basis: 0;
            flex-grow: 1;
          }
        }
      }
      &--back {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: currentColor;
        text-decoration: none;
        &__icon {
          display: block;
          height: 0.625rem;
          width: auto;
          margin-right: 0.5rem;
          transition: 0.3s;
        }
        &:hover {
          .#{$this}--back__icon {
            transform: translateX(-0.5rem);
          }
        }
      }
      &--list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        &__item {
          display: block;
          margin-right: 0.75rem;
          a {
            display: flex;
            align-items: center;
            .icon {
              display: block;
              height: 0.625rem;
              width: auto;
              margin-left: 0.5rem;
              color: $colorText;
            }
          }
          &.is-active {
            a {
              font-weight: 500;
              color: $colorPrimary;
            }
          }
        }
      }
    }
  }
}
</style>
