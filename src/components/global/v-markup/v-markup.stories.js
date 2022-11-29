import VMarkup from './v-markup.vue'
import markup from './mockData.html?raw'

/**
 * Boilerplate for the component
 */
export default {
  title: 'Global/VMarkup',
  component: VMarkup,
  argTypes: {},
  parameters: {}
}

/**
 * Boilerplate for all stories
 */
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VMarkup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-markup v-bind="args">${args.slotTemplate}</v-markup>`
})

/**
 * General component stories
 */
export const Generic = Template.bind({})
Generic.args = {
  slotTemplate: '<div>Some markup</div>'
}

/**
 * Boilerplate for Kitchen Sink stories
 */
const KitchenSinkTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VMarkup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-markup v-bind="args">${markup}</v-markup>`
})

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.args = {}
