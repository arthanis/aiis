<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import ProductList from '@/components/ProductList.vue'
import type { ProductType } from '@/types/Product'

const url = import.meta.env.VITE_API_URL
const { isFetching, error, data = [] } = useFetch(url).get().json<ProductType[] | never[] | null>()
</script>

<template>
  <div v-if="error" class="bg-red-100 rounded p-3 border border-red-200">
    {{ error }}
  </div>

  <div v-if="isFetching" class="loading loading-spinner loading-lg block mx-auto my-5"></div>

  <ProductList :products="data" />
</template>
