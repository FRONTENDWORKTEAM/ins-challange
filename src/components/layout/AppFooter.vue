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
            button.btn.btn-primary(type="button" @click="downloadFile") Save & Next
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      groups: 'segmentgroup/groups',
    }),
  },
  methods: {
    downloadFile() {
      const filename = 'saveData.json';
      const blob = new Blob([JSON.stringify(this.groups)], { type: 'text/plain' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        const e = document.createEvent('MouseEvents');
        const a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/shareds.scss';

$this: 'footer';

footer.component {
  &.is-#{$this} {
    height: (1.5rem * 2) + 2.375rem + 0.0625rem; // Vertical padding + content height + border-top
    .#{$this} {
      &--wrapper {
        position: fixed;
        z-index: 2;
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
