import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/users'

export const useUsersStore = defineStore('users', () => {
  const users = ref([])
  const filter = ref('')
  const isLoading = ref(false)

  const loadUsers = async () => {
    isLoading.value = true
    users.value = await api.getUsers()
    isLoading.value = false
  }

  const filterUsers = (searchTerm) => {
    filter.value = searchTerm
  }

  const filteredUsers = computed(() => {
    return users.value.filter((user) => {
      const inName = user.name.toLowerCase().includes(filter.value.toLowerCase())
      const inEmail = user.email.toLowerCase().includes(filter.value.toLowerCase())

      return inName || inEmail
    })
  })

  return { users, loadUsers, filterUsers, filteredUsers, isLoading }
})
