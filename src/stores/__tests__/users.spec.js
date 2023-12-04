import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUsersStore } from '@/stores/users'
import api from '@/api/users'
import TEST_USERS from '@/mocks/users'

describe('Users Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("should load users", async () => {
    const store = useUsersStore()
    expect(store.users).toEqual([])
    api.getUsers = vi.fn().mockResolvedValue(TEST_USERS)
    await store.loadUsers()
    expect(store.users).toEqual(TEST_USERS)
  })
})
