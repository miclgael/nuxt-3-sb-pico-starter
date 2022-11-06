<script setup>
const props = defineProps({
  element: {
    type: String,
    default: 'section'
  },
  container: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: 'rgba(0,0,0,0)'
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<template>
  <component :is="element" :class="[$style.section, , background ? $style.section__background : null]">
    <div :class="[container ? $style.section__inside : null]">

      <slot />
    </div>
  </component>
</template>

<style module scoped>
section {
  margin-bottom: 0;
}

.section {
  color: v-bind(color);
}

.section__inside {
  position: relative;
  max-width: 94rem;
  margin: 0 auto;
  padding: 2rem 3rem;
}

.section__background {
  background-color: v-bind(background);
}
</style>
