import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '@/stores/users'
import UserList from '../UserList.vue'
import TEST_USERS from '@/mocks/users'

describe('UserList', () => {
  let wrapper
  let store

  beforeEach(() => {
    wrapper = mount(UserList, {
      global: {
        plugins: [createTestingPinia({
          initialState: {
            users: {
              users: TEST_USERS
            }
          },
        })],
      },
    })

    store = useUsersStore()
  })

  it('loads users on mount', () => {
    expect(store.loadUsers).toHaveBeenCalledOnce()
  })

  it('renders a list item for each user', () => {
    expect(wrapper.findAll('tbody tr')).toHaveLength(TEST_USERS.length)
  })

  it('renders a name, email and avatar for each user', () => {
    expect(wrapper.text()).toContain(TEST_USERS[0].name)
    expect(wrapper.text()).toContain(TEST_USERS[0].email)
    expect(wrapper.findAll('img')[0].attributes('src')).toContain(TEST_USERS[0].email)

    expect(wrapper.text()).toContain(TEST_USERS[1].name)
    expect(wrapper.text()).toContain(TEST_USERS[1].email)
    expect(wrapper.findAll('img')[1].attributes('src')).toContain(TEST_USERS[1].email)

    expect(wrapper.text()).toContain(TEST_USERS[2].name)
    expect(wrapper.text()).toContain(TEST_USERS[2].email)
    expect(wrapper.findAll('img')[2].attributes('src')).toContain(TEST_USERS[2].email)
  })
})
