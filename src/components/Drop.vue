<template>
  <div id="dropdown">
    <div @click="toggleData">
      <i :class="icon"></i>
      <i class="fa fa-caret-down drop-icon"></i>
    </div>
    <div v-if="isOpen" class="dropdown-trigger" @mouseleave="toggleData">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    isOpen() {
      return this.show;
    }
  },
  methods: {
    toggleData() {
      this.show = !this.show;
    }
  }
};
</script>
<style>
.drop-icon {
  color: white;
  padding: 5px;
}
</style>
