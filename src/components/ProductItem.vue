<script setup lang="ts">
import type { ProductType } from '@/types/Product'
import { BIconCart } from 'bootstrap-icons-vue'

const { product } = defineProps<{
  product: ProductType
}>()

const getPrice = (number: number): string => {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'EUR' }).format(number)
}
</script>

<template>
  <div class="p-3 rounded shadow bg-white">
    <div class="flex justify-center py-3">
      <img :src="product.img" :alt="product.name" class="h-24 md:h-32 object-cover" />
    </div>

    <p class="font-bold text-black">
      {{ product.name }}
    </p>

    <p class="text-neutral-400">
      {{ getPrice(product.price) }}
    </p>

    <div class="flex items-center gap-3 mt-2">
      <input type="number" class="input input-bordered input-sm w-3/4 flex-1" />
      <button type="button" class="btn btn-primary btn-sm w-1/4 px-0">
        <BIconCart />
      </button>
    </div>
  </div>
</template>
