<script setup>
const year = (new Date).getFullYear()
const headerFooterTheme = {
  background: '#000',
  color: '#fff',
}
</script>

<template>
  <v-section element="header" :theme="headerFooterTheme">
    <h1>Header</h1>
  </v-section>
  <v-section element="main" :is-container="false">
    <slot />
  </v-section>
  <v-section element="footer" :theme="headerFooterTheme">
    <p>Michael Gale &copy; 1987 - {{ year }}</p>
  </v-section>
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
