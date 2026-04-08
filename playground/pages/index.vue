<script setup lang="ts">
const { loggedIn, session } = useAuth()
</script>

<template>
  <div style="padding: 1rem">
    <h1>Home (SSR)</h1>
    <p>loggedIn: {{ loggedIn }}</p>
    <pre>{{ session }}</pre>
  </div>
</template>
