<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'
import type { ProductType } from '@/types/Product'

const { products } = defineProps<{
  products: null | ProductType[]
}>()
</script>

<template>
  <div
    v-if="Array.isArray(products)"
    class="py-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
