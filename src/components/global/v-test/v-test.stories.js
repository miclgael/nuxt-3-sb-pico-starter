import VTest from './v-test.vue'

export default {
  title: 'Test/Vtest',
  component: VTest
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VTest },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {
      args
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-test v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {}
