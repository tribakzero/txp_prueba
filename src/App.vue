<script setup>
import UserList from './components/UserList.vue'
</script>

<template>
  <div class="h-screen m-0">
    <header class="bg-white border-b border-b-slate-200">
      <h1 class="p-3">
        <img alt="Vue logo" class="mx-auto" src="./assets/traxporta.png" width="50" height="50" />
      </h1>
    </header>

    <div class="bg-white m-4">
      <UserList />
    </div>
  </div>
</template>
