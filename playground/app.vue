<script setup lang="ts">
</script>

<template>
  <div>
    <nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #ccc">
      <NuxtLink to="/">Home (SSR)</NuxtLink>
      <NuxtLink to="/spa">SPA Page (ssr: false)</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
