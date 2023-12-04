<script setup>
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

const filterUsers = (event) => {
  usersStore.filterUsers(event.target.value)
}
</script>

<template>
  <input
    type="text"
    @input="filterUsers"
    placeholder="Search"
    class="w-8/12 block mx-auto my-5 border border-slate-200 rounded-full px-8 py-4"
  />
</template>
