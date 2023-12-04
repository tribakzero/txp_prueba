<script setup>
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()
usersStore.loadUsers()

const avatar = (email) => `https://i.pravatar.cc/40?u=${email}`
</script>

<template>
  <div v-if="usersStore.isLoading" class="text-center p-4">
    <p class="text-xl">Loading users...</p>
  </div>
  <div v-else-if="usersStore.filteredUsers.length === 0" class="text-center p-4">
    <p class="text-xl">No users found</p>
  </div>
  <table v-else class="table table-compact w-full text-left">
    <thead>
      <tr>
        <th></th>
        <th class="font-light">Name</th>
        <th class="font-light">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in usersStore.filteredUsers" :key="user.email" class="border-t border-slate-200">
        <td class="w-16 whitespace-normal">
          <img class="w-10 h-10 m-4" :src="avatar(user.email)" :alt="user.name" />
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
