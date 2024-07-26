<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-neutral-100">
    <div class="container mx-auto py-3">
      <nav class="flex items-center gap-x-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/products" class="ml-auto">Cart</RouterLink>
      </nav>
    </div>
  </header>
</template>
