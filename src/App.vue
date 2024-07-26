<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Header from './components/layout/Header.vue'

const route = useRoute()
</script>

<template>
  <Header />

  <div class="bg-neutral-50 min-h-screen">
    <main class="container max-w-screen-xl mx-auto p-5 lg:px-0 lg:py-10">
      <h1 class="mb-5 text-lg md:text-2xl font-bold">{{ route.meta.title }}</h1>

      <RouterView />
    </main>
  </div>
</template>
