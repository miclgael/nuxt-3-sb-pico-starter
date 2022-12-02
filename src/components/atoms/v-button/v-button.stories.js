import VButton from './v-button.vue'
import { colorOptions } from './v-button.config.js'

export default {
  title: 'Atoms/VButton',
  component: VButton,
  argTypes: {
    color: { control: { type: 'select' }, options: colorOptions },
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
  color: colorOptions.at(0),
}

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  ...defaultArgs,
  default: 'Button, styled like a button, no `to` prop was present',
}
export const WithToProp = Template.bind({})
WithToProp.args = {
  ...defaultArgs,
  to: '#',
  default: 'Text link, styled like a button',
}

export const ColorIsPrimary = Template.bind({})
ColorIsPrimary.args = {
  color: 'primary',
  default: 'Button, primary color'
}

export const ColorIsSecondary = Template.bind({})
ColorIsSecondary.args = {
  color: 'secondary',
  default: 'Button, secondary color',
}

export const ColorIsContrast = Template.bind({})
ColorIsContrast.args = {
  color: 'contrast',
  default: 'Button, high contrast color',
}
