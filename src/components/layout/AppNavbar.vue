<template lang="pug">
section.component.is-navbar
  nav.navbar.navbar-expand-lg.navbar-dark
    .container-fluid
      a.navbar-brand(href="#")
        img(src="../../assets/logo.svg")
      button.navbar-toggler(
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.mr-auto.mb-2.mb-lg-0
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false")
              | Statistics
            ul.dropdown-menu(aria-labelledby="navbarDropdown")
              li
                a.dropdown-item(href="#") Action
              li
                a.dropdown-item(href="#") Another action
              li
                a.dropdown-item(href="#") Something else here
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false")
              | Predictive Analysis
            ul.dropdown-menu(aria-labelledby="navbarDropdown")
              li
                a.dropdown-item(href="#") Action
              li
                a.dropdown-item(href="#") Another action
              li
                a.dropdown-item(href="#") Something else here
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false")
              | Real-Time Analytics
            ul.dropdown-menu(aria-labelledby="navbarDropdown")
              li
                a.dropdown-item(href="#") Action
              li
                a.dropdown-item(href="#") Another action
              li
                a.dropdown-item(href="#") Something else here
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false")
              | Components
            ul.dropdown-menu(aria-labelledby="navbarDropdown")
              li
                a.dropdown-item(href="#") Action
              li
                a.dropdown-item(href="#") Another action
              li
                a.dropdown-item(href="#") Something else here
        ul.navbar-nav
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false")
              | alexa@useinsider.com
            ul.dropdown-menu(aria-labelledby="navbarDropdown")
              li
                a.dropdown-item(href="#") Action
              li
                a.dropdown-item(href="#") Another action
              li
                a.dropdown-item(href="#") Something else here
          li.nav-item
            a.btn
              Icon.icon(name="search")
</template>

<style lang="scss" scoped>
@import '../../styles/shareds.scss';

$this: 'navbar';

section.component {
  &.is-#{$this} {
    .#{$this} {
      background: $colorDark;
      font-size: 0.875rem;
      line-height: 1rem;
      color: #fff;
      box-shadow: 0px 4px 12px rgba(44, 53, 70, 0.15);
      &-brand {
        display: block;
        padding: 0;
        img {
          display: block;
          height: 2rem;
          width: auto;
        }
      }
      &-nav {
        .nav-item {
          .icon {
            display: block;
            height: 1.125rem;
            color: #fff;
          }
        }
        .nav-link {
          color: rgba(255, 255, 255, 1);
          &:hover, &:focus {
            color: rgba(255, 255, 255, 0.75);
          }
        }
        &:last-child {
          .nav-item {
            @media (min-width: 992px) {
              position: relative;
              padding-left: 1rem;
              padding-right: 1rem;
              &:before {
                display: block;
                content: '';
                position: absolute;
                top: -0.5rem;
                bottom: -0.5rem;
                left: 0;
                width: 1px;
                background: #2C3546;
              }
            }
          }
        }
      }
    }
  }
}
</style>
