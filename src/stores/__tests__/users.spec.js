import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUsersStore } from '@/stores/users'
import api from '@/api/users'
import TEST_USERS from '@/mocks/users'

describe('Users Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should load users', async () => {
    const store = useUsersStore()
    expect(store.users).toEqual([])
    api.getUsers = vi.fn().mockResolvedValue(TEST_USERS)
    await store.loadUsers()
    expect(store.users).toEqual(TEST_USERS)
  })

  it('should filter users properly', async () => {
    const store = useUsersStore()
    store.users = TEST_USERS
    store.filterUsers('Jo')
    expect(store.filteredUsers).toEqual([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com'
      },
      {
        id: 3,
        name: 'Joe Doe',
        email: 'joe@doe.com'
      }
    ])

    store.filterUsers('Jane')
    expect(store.filteredUsers).toEqual([{ id: 2, name: 'Jane Doe', email: 'jane@doe.com' }])

    store.filterUsers('')
    expect(store.filteredUsers).toEqual(TEST_USERS)

    store.filterUsers('Non Existing User Name')
    expect(store.filteredUsers).toEqual([])
  })

  it('should return isLoading properly', async () => {
    const store = useUsersStore()
    expect(store.isLoading).toBe(false)
    api.getUsers = vi.fn().mockResolvedValue(TEST_USERS)
    store.loadUsers()
    expect(store.isLoading).toBe(true)
    await store.loadUsers()
    expect(store.isLoading).toBe(false)
  })
})
