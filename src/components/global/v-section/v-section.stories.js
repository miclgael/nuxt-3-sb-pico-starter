import VSection from './v-section.vue'

/**
 * Reusable color control options
 */
const colorControls = {
  description: 'Any valid color',
  control: { type: 'color' },
  table: {
    category: 'Colors',
    type: {
      summary: 'Color value',
      detail: `
        Valid values include: 
        - #000, 
        - #000000, rgb(0,0,0), rgba(0,0,0,1), hsl(0,0%,0%), hsla(0,0%,0%,1), or any valid CSS color name.`,
    }
  }
}

/**
 * Boilerplate for the component
 */
export default {
  title: 'Global/VSection',
  component: VSection,
  argTypes: {
    background: { ...colorControls, name: 'Background' },
    color: { ...colorControls, name: 'Color' },
    element: {
      description: 'Any valid html element',
      control: {
        type: 'select',
        options: ['main', 'div', 'section', 'article', 'aside', 'header', 'footer']
      }
    },
    isContainer: {
      description: 'Whether or not to wrap the content in a container',
      control: { type: 'boolean' },
    }
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(default)(?:\b|')/
    }
  },
  docs: {
    description: {
      component: 'Some component _markdown_',
    },
  },
}

/**
 * Args common between all components
 */
const defaultArgs = {
  slotTemplate: '<h1>Content</h1>',
  background: 'lightblue',
  color: 'indigo',
  element: 'section'
}

/**
 * Boilerplate for all stories
 */
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-section v-bind="args">${args.slotTemplate}</v-section>`
})

/**
 * Component stories
 */
export const WithContainer = Template.bind({})
WithContainer.args = {
  isContainer: true,
  ...defaultArgs
}

export const WithoutContainer = Template.bind({})
WithoutContainer.args = {
  isContainer: false,
  ...defaultArgs
}
