<template>
  <div class="grid-cell">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  /**
   * CSS `align-self` value for the grid cell
   */
  align: {
    type: String,
    default: 'start',
    validator: (value) => ['center', 'start', 'end'].includes(value)
  },
  /**
   * CSS `justify-self` value for the grid cell
   */
  justify: {
    type: String,
    default: 'start',
    validate: (value) => {
      return ['center', 'start', 'end', 'space-between', 'space-around', 'space-evenly'].includes(value)
    }
  }
})
</script>

<style scoped>
.grid-cell {
  align-self: v-bind(align);
  justify-self: v-bind(justify);
}
</style>
