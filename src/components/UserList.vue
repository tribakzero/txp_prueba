<script setup>
const users = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    avatar: 'https://i.pravatar.cc/40?u=1'
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    avatar: 'https://i.pravatar.cc/40?u=2'
  },
  {
    name: 'Joe Doe',
    email: 'joe@doe.com',
    avatar: 'https://i.pravatar.cc/40?u=3'
  }
]
</script>

<template>
  <div class="p-2 border border-slate-200 rounded-3xl">
    <h2 class="text-xl font-semibold text-center mb-2">Users</h2>
    <table class="table table-compact w-full text-left m-4">
      <thead>
        <tr>
          <th></th>
          <th class="font-light">Name</th>
          <th class="font-light">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td class="w-16 whitespace-normal">
            <img class="w-10" :src="user.avatar" :alt="user.name" />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
