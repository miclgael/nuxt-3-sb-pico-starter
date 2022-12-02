<template>
  <component 
    :is="buttonType($props)" 
    v-bind="linkProps($props)" 
    role="button"
    :class="[$props.color, $props.variant]"
  >
    <slot />
  </component>
</template>

<script setup>
import * as config from './v-button.config.js'
const props = defineProps({
  /**
   * The presence of the `to` prop, will output an `nuxt-link`, or `a` tag, depending on its contents.
   * Use for navigating between different routes, or external links.
   */
  to: {
    type: String,
    default: null
  },

  /**
   * Use for triggering a function.
   */
  action: {
    type: String,
    default: null
  },

  /**
   * The color of the button
   */
  color: {
    type: String,
    default: 'primary',
    validator: (value) => config.colorOptions.includes(value)
  },

  /**
   * The variant of the button
   */
  variant: {
    type: String,
    default: null,
    validator: (value) => ['outline'].includes(value)
  }
})

const buttonType = (props) => {
  const isExternal = 
    props.to && props.to.startsWith('http') || 
    props.to && props.to.startsWith('https') ||
    props.to && props.to.startsWith('www')

  const isNuxtLink = props.to && props.to.startsWith('/')

  if (isExternal) {
    return 'a'
  } else if (isNuxtLink) {
    return 'nuxt-link'
  } else {
    return 'button'
  }
}
const linkProps = (props) => {
  const isExternal = 
    props.to && props.to.startsWith('http') || 
    props.to && props.to.startsWith('www')

  const isNuxtLink = props.to && props.to.startsWith('/')

  if (isExternal) {
    return {
      ...props,
      href: props.to
    }
  } else if (isNuxtLink) {
    return {
      ...props,
      to: props.to
    }
  } else {
    return {
      ...props
    }
  }
}

</script>
