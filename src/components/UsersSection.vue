<script setup>
import UserList from '@/components/UserList.vue'
import UserSearch from '@/components/UserSearch.vue'
</script>

<template>
  <div class="col-span-10 xl:col-span-5 row-span-auto col-start-2 xl:col-start-5 row-start-2">
    <div class="bg-white border border-slate-200 rounded-3xl">
      <h2 class="text-xl font-semibold text-center pt-4">Users</h2>
      <UserSearch />
      <UserList />
    </div>
  </div>
</template>
