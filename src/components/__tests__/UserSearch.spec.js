import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '@/stores/users'
import UserSearch from '@/components/UserSearch.vue'

describe('UserSearch', () => {
  let wrapper
  let store

  beforeEach(() => {
    wrapper = mount(UserSearch, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              users: {
                users: []
              }
            }
          })
        ]
      }
    })

    store = useUsersStore()
  })

  it('should filter users', async () => {
    const input = wrapper.get('input')

    await input.setValue('John')

    expect(store.filterUsers).toHaveBeenCalledWith('John')
  })
})
