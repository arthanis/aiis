<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProductType } from '@/types/Product'

const { product } = defineProps({
  product: { type: Object as PropType<ProductType>, required: true }
})
</script>

<template>
  <div class="p-3 rounded shadow bg-white">
    <div class="flex justify-center py-3">
      <img :src="product.img" :alt="product.name" class="h-24 md:h-32 object-cover" />
    </div>

    <p class="font-semibold">
      {{ product.name }}
    </p>
  </div>
</template>
