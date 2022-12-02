<template>
  <component 
    :is="buttonType($props)" 
    v-bind="$props" 
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
   * The presence of the `to` prop, determines the button type.
   */
  to: {
    type: String,
    default: null
  },

  /**
   * The target of the link, if `type` is `link`
   */
  // target: {
  //   type: String,
  //   default: '_self',
  //   validator: (value) => ['_self', '_blank', '_parent', '_top'].includes(value)
  // },
  /**
   * The rel attribute of the link, if `type` is `link`
   */
  // rel: {
  //   type: String,
  //   default: 'noopener noreferrer',
  //   validator: (value) => ['noopener', 'noreferrer', 'noopener noreferrer'].includes(value)
  // },
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
  return props.to !== null ? 'nuxt-link' : 'button'
}
</script>
