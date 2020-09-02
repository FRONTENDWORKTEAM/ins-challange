<template lang="pug">
  .component.is-create-segment

    .create-segment--title
      h3 {{ segment.activeCategory.name }}
      a.create-segment--title__action(@click="removeSegment({groupId, segmentIndex})") Delete

    .create-segment--form

      .create-segment--form__item.is-lg
        label.form-label Segment
        select.form-select(
          v-model="modelCondition"
          @change="handleChangeInputs()")
          option(
            v-for="condition in activeConditions"
            :key="`condition${condition.id}`"
            :value="condition.alias" v-html="condition.name")

      .create-segment--form__item
        label.form-label Operatör
        select.form-select(
          v-model="modelOperator"
          @change="handleChangeInputs()"
          )
          option(
            v-for="(operator, index) in activeOperators"
            :key="`SelectOperator${modelCondition}${index}`"
            :value="operator" v-html="operator")

      template(v-if="modelCondition")
        template(v-for="(inputItem, key) in activeCondition.inputs")
          .create-segment--form__item(v-if="inputItem.display !== 'none'")
            label.form-label {{key}}
            template(v-if="inputItem.inputType === 'select'")
              select.form-select(
                :ref="`refInput${key}`"
                @change="handleChangeInputs()")
                option(value disabled selected hidden)
                option(
                  v-for="(option,index) in inputItem.values"
                  :key="`input${key}${index}`"
                  :value="option.value" v-html="option.desc")
            template(v-else)
              input.form-control(
                :type="inputItem.inputType"
                :ref="`refInput${key}`"
                @change="handleChangeInputs()")
</template>

<script>
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      modelCondition: null,
      modelOperator: null,
    };
  },
  props: {
    groupId: {
      type: String,
      required: true,
      default: null,
    },
    segmentIndex: {
      type: Number,
      required: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      groups: 'segmentgroup/groups',
      conditions: 'application/conditions',
      inputs: 'application/inputs',
      parameterOperators: 'applications/parameterOperators',
    }),
    segment() {
      return this.groups[this.groupId].conditionList[this.segmentIndex];
    },
    activeConditions() {
      return this.conditions.filter((o) => o.category === this.segment.activeCategory.id);
    },
    activeCondition() {
      return this.activeConditions.find((o) => o.alias === this.modelCondition);
    },
    activeOperators() {
      return this.modelCondition
        ? this.inputs[
          this.activeCondition.operatorType
        ]
        : [];
    },
  },
  methods: {
    ...mapActions({
      updateSegment: 'segmentgroup/updateSegment',
      removeSegment: 'segmentgroup/removeSegment',
    }),
    handleChangeInputs() {
      const segment = {
        id: this.modelCondition,
        operator: this.modelOperator,
        inputs: {},
        activeCategory: this.segment.activeCategory,
      };
      for (const [key, value] of Object.entries(
        this.activeConditions.find((o) => o.alias === this.modelCondition).inputs,
      )) {
        if (!(value.display && value.display === 'none')) {
          segment.inputs[key] = this.$refs[`refInput${key}`] && this.$refs[`refInput${key}`][0]
            ? { val: this.$refs[`refInput${key}`][0].value }
            : null;
        }
      }
      this.updateSegment({
        segment,
        groupId: this.groupId,
        segmentIndex: this.segmentIndex,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/shareds.scss';

$this: 'create-segment';

.component {
  &.is-#{$this} {
    padding: 1.5rem 2rem;
    position: relative;
    .#{$this} {
      &--title {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        h3 {
          color: $colorText;
          font-weight: 600;
          font-size: 1rem;
        }
        &__action {
          color: #DC2A2A;
          text-decoration: none;
        }
      }
      &--form {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        &__item {
          width: 10prem;
          margin-right: 1rem;
          &.is-lg {
            width: 20rem;
          }
        }
      }
    }
  }
}
</style>
