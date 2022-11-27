import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import VSection from './v-section.vue'

describe('v-section', () => {
  it('Render background class on element', async () => {
    const wrapper = mount(VSection, {
      props: {
        background: 'red',
      }
    })
    expect(wrapper.classes())
      .toContain('_section__background_32fa5e')
  })

  it('Render color class on element', async () => {
    const wrapper = mount(VSection, {
      props: {
        color: 'red',
      }
    })
    expect(wrapper.classes())
      .toContain('_section_32fa5e')
  })

  it('Render text in a slot', async () => {
    const wrapper = mount(VSection, {
      slots: {
        default: 'Foo bar',
      }
    })
    expect(wrapper.text()).toContain('Foo bar')
  })

  it('Renders container div class', async () => {
    const wrapper = mount(VSection, {
      props: {
        isContainer: true
      }
    })
    expect(wrapper.get('div').classes()).toContain('_section__inside_32fa5e')
  })
})
