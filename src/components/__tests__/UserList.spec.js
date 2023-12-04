import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserList from '../UserList.vue'

describe('UserList', () => {
  it('renders a list item for each user', () => {
    const wrapper = mount(UserList)

    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })

  it('renders a name, email and avatar for each user', () => {
    const wrapper = mount(UserList)

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@doe.com')
    expect(wrapper.findAll('img')[0].attributes('src')).toBe('https://i.pravatar.cc/40?u=1')

    expect(wrapper.text()).toContain('Jane Doe')
    expect(wrapper.text()).toContain('jane@doe.com')
    expect(wrapper.findAll('img')[1].attributes('src')).toBe('https://i.pravatar.cc/40?u=2')

    expect(wrapper.text()).toContain('Joe Doe')
    expect(wrapper.text()).toContain('joe@doe.com')
    expect(wrapper.findAll('img')[2].attributes('src')).toBe('https://i.pravatar.cc/40?u=3')
  })
})
