// https://github.com/storybookjs/storybook/blob/master/app/vue3/README.md#extending-the-vue-application

import { app } from '@storybook/vue3';

import { NuxtLink } from './mock-components/NuxtLink'
app.component('NuxtLink', NuxtLink)

export const parameters = {
  controls: { expanded: true },
}
