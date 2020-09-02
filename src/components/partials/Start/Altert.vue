<template lang="pug">
  section.component.is-start-alert
    .container-fluid
      .alert.is-info(role="alert")
        Icon.alert--icon(name="info")
        .alert--text A simple info alert—check it out!
</template>

<style lang="scss" scoped>
@import '../../../styles/shareds.scss';

$this: 'start-alert';

section.component {
  &.is-#{$this} {
    margin-bottom: 1.5rem;
    .#{$this} {}
  }
}
</style>
