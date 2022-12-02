<template>
  <component 
    :is="buttonType($props)" 
    v-bind="$props" 
    role="button"
    :class="$props.color"
  >
    <slot />
  </component>
</template>

<script setup>
import { colorOptions } from './v-button.config.js'
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
    validator: (value) => colorOptions.includes(value)
  },
  /**
   * The size of the button
   */
  // size: {
  //   type: String,
  //   default: 'medium',
  //   validator: (value) => ['small', 'medium', 'large'].includes(value)
  // },
  /**
   * The shape of the button
   */
  // shape: {
  //   type: String,
  //   default: 'square',
  //   validator: (value) => ['square', 'rounded', 'pill'].includes(value)
  // },
  /**
   * The variant of the button
   */
  // variant: {
  //   type: String,
  //   default: 'contained',
  //   validator: (value) => ['contained', 'outlined', 'text'].includes(value)
  // },
  /**
   * The icon to display on the button
   */
})

const buttonType = (props) => {
  return props.to !== null ? 'nuxt-link' : 'button'
}
</script>
