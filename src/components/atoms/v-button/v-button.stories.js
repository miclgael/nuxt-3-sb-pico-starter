import VButton from './v-button.vue'
import * as config from './v-button.config.js'

export default {
  title: 'Atoms/VButton',
  component: VButton,
  argTypes: {
    color: { control: { type: 'select' }, options: config.colorOptions },
    to: { control: { type: 'text' } }
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  setup: () => ({ args }),
  template: `<v-button v-bind="args">${args.default}</v-button>`
})

const defaultArgs = {
  color: config.colorOptions.at(0),
}

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  ...defaultArgs,
  default: 'Button, styled like a button, no `to` prop was present',
}
export const WithRelativeToProp = Template.bind({})
WithRelativeToProp.args = {
  ...defaultArgs,
  to: '/about',
  default: 'Nuxt-link, styled like a button',
}

export const WithAbsoluteToProp = Template.bind({})
WithAbsoluteToProp.args = {
  ...defaultArgs,
  to: 'https://google.com',
  default: 'Nuxt-link, styled like a button',
}

export const ColorIsPrimary = Template.bind({})
ColorIsPrimary.args = {
  color: config.colorOptions.at(0),
  default: 'Button, primary color'
}

export const ColorIsSecondary = Template.bind({})
ColorIsSecondary.args = {
  color: config.colorOptions.at(1),
  default: 'Button, secondary color',
}

export const ColorIsContrast = Template.bind({})
ColorIsContrast.args = {
  color: config.colorOptions.at(2),
  default: 'Button, high contrast color',
}

export const VariantOutline = Template.bind({})
VariantOutline.args = {
  color: config.colorOptions.at(0),
  variant: 'outline',
  default: 'Button, Outlined variant',
}
