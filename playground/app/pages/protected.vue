<script lang="ts">
export default defineComponent({
  name: "ProtectedPage",
})
</script>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { session, user } = useAuth()
</script>

<template>
  <div style="padding: 1rem">
    <h1>Protected Page</h1>
    <p>This page uses the <code>auth</code> middleware. You will be redirected to <code>/login</code> if not authenticated.</p>

    <h3>Session</h3>
    <pre>{{ session }}</pre>

    <h3>User</h3>
    <pre>{{ user }}</pre>
  </div>
</template>
