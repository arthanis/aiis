<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
</script>

<template>
  <Header />

  <main class="container mx-auto py-5">
    <RouterView />
  </main>
</template>
