import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '@/stores/users'
import UserList from '@/components/UserList.vue'
import TEST_USERS from '@/mocks/users'

describe('UserList', () => {
  let wrapper
  let store

  beforeEach(() => {
    wrapper = mount(UserList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              users: {
                users: TEST_USERS
              }
            }
          })
        ]
      }
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
    expect(wrapper.findAll('tbody tr')[0].text()).toContain(TEST_USERS[0].name)
    expect(wrapper.findAll('tbody tr')[0].text()).toContain(TEST_USERS[0].email)
    expect(wrapper.findAll('tbody tr')[0].find('img').attributes('src')).toContain(TEST_USERS[0].email)

    expect(wrapper.findAll('tbody tr')[1].text()).toContain(TEST_USERS[1].name)
    expect(wrapper.findAll('tbody tr')[1].text()).toContain(TEST_USERS[1].email)
    expect(wrapper.findAll('tbody tr')[1].find('img').attributes('src')).toContain(TEST_USERS[1].email)

    expect(wrapper.findAll('tbody tr')[2].text()).toContain(TEST_USERS[2].name)
    expect(wrapper.findAll('tbody tr')[2].text()).toContain(TEST_USERS[2].email)
    expect(wrapper.findAll('tbody tr')[2].find('img').attributes('src')).toContain(TEST_USERS[2].email)
  })

  it('renders a message when there are no users', async () => {
    await store.$patch({ users: [] })
    expect(wrapper.text()).toContain('No users found')
  })

  it('renders a message when users are being loaded', async () => {
    await store.$patch({ isLoading: true })
    expect(wrapper.text()).toContain('Loading users...')
  })
})
