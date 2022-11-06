<script setup>
const year = (new Date).getFullYear()
</script>

<template>
  <v-section :element="'header'" :background="'pink'">
    <h1>Whalebones</h1>
    <p>The official website of the Australian musician, poet, writer and artist.</p>
  </v-section>
  <v-section :element="'main'" :container="false">
    <slot />
  </v-section>
  <v-section :element="'footer'" :background="'black'">
    <h2>Whalebones</h2>
    <p>Michael Gale &copy; 1987 - {{ year }}</p>
  </v-section>
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
