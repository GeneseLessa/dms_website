<template>
  <div id="checkbox" @click="toggleValue" style="cursor: pointer">
    <h4>
      <i class="toggle on icon" v-if="item[field]" />
      <i class="toggle off icon" v-else />
      {{ label }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: { item: Object, field: String, label: String },
  methods: {
    toggleValue() {
      this.item[this.field] = !this.item[this.field];
    },
  },
};
</script>

<style lang="css" scoped>
#checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
}
</style>
