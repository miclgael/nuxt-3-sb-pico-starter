import { action } from '@storybook/addon-actions'

export const NuxtLink = {
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    log () {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
}
