import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/users'

export const useUsersStore = defineStore('users', () => {
  const users = ref([])

  const loadUsers = async () => {
    users.value = await api.getUsers()
  }

  return { users, loadUsers }
})
