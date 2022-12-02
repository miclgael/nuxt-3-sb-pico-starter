import VButton from './v-button.vue'
import { colorOptions } from './v-button.data.js'

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

export const TypeIsButton = Template.bind({})
TypeIsButton.args = {
  ...defaultArgs,
  default: 'Button, styled like a button, no `to` prop was present',
}
export const TypeIsLink = Template.bind({})
TypeIsLink.args = {
  ...defaultArgs,
  to: '#',
  default: 'Text link, styled like a button',
}

export const TypeIsLink2 = Template.bind({})
TypeIsLink2.args = {
  ...defaultArgs,
  to: '/about',
  default: 'Text link, styled like a button',
}
