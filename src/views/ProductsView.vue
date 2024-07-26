<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import ProductItem from '@/components/ProductItem.vue'

const url = import.meta.env.VITE_API_URL
const { isFetching, error, data } = useFetch(url).get().json()
</script>

<template>
  <div v-if="error" class="bg-red-100 rounded p-3 border border-red-200">
    {{ error }}
  </div>

  <div v-if="isFetching" class="loading loading-spinner loading-lg block mx-auto my-5"></div>
  <div v-else>
    <div
      v-if="Array.isArray(data)"
      class="py-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductItem v-for="(product, index) in data" :key="index" :product="product" />
    </div>
  </div>
</template>
