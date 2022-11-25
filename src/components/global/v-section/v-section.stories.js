import VSection from './v-section.vue'

const colorControls = {
  control: {
    type: 'color'
  }
}

const defaultArgs = {
  slotTemplate: '<h1>Content</h1>',
  background: 'lightblue',
  color: 'indigo',
  element: 'section'
}

export default {
  title: 'Global/VSection',
  component: VSection,
  argTypes: {
    background: colorControls,
    color: colorControls,
    element: {
      control: {
        type: 'select',
        options: ['main', 'div', 'section', 'article', 'aside', 'header', 'footer']
      }
    }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {
      args
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-section v-bind="args">${args.slotTemplate}</v-section>`
})

export const WithContainer = Template.bind({})
WithContainer.args = {
  container: true,
  ...defaultArgs
}

export const WithoutContainer = Template.bind({})
WithoutContainer.args = {
  container: false,
  ...defaultArgs
}
