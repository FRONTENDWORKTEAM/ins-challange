<template lang="pug">
  svg(:viewBox="getViewBox()")
    use(:xlink:href="`#icon-${name}`")
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      icons: [
        {
          name: 'search',
          viewBox: '0 0 18 18',
        },
        {
          name: 'arrow-left',
          viewBox: '0 0 15 10',
        },
        {
          name: 'chevron-right',
          viewBox: '0 0 6 10',
        },
        {
          name: 'close',
          viewBox: '0 0 14 14',
        },
        {
          name: 'info',
          viewBox: '0 0 18 18',
        },
      ],
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    getViewBox() {
      return this.icons.find((i) => i.name === this.name).viewBox;
    },
  },
};
</script>
