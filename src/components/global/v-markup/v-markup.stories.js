import markup from './mockData.html?raw'

/**
 * Boilerplate for the component
 */
export default {
  title: 'Global/VMarkup',
  argTypes: {},
  parameters: {}
}

/**
 * Boilerplate for all stories
 */
const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  // components: { VSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  // setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div>${markup}</div>`
})

/**
 * Component stories
 */
export const KitchenSink = Template.bind({})
