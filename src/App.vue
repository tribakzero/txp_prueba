<script setup>
import TopBar from '@/components/TopBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import UsersSection from '@/components/UsersSection.vue'
</script>

<template>
  <div class="m-0 bg-gray-50">
    <TopBar />
    <div class="grid grid-cols-12 gap-4 h-screen">
      <HeaderBar />
      <UsersSection />
    </div>
  </div>
</template>
