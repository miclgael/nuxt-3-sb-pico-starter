<script setup>
defineProps({
  cols: {
    type: Number,
    default: 2
  },
  rows: {
    type: Number,
    default: 1
  },
  align: {
    type: String,
    default: 'center'
  },
  justify: {
    type: String,
    default: 'center'
  },
  gap: {
    type: String,
    default: '1rem'
  }
})
</script>

<template>
  <div class="grid">
    <slot :align="align"/>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-gap: v-bind(gap);
  align-items: v-bind(align);
  justify-content: v-bind(justify);
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(v-bind(cols), minmax(180px, 1fr));
  }
}
</style>
