<script setup lang="ts">
import CartItem from '@/components/CartItem.vue'
import type { CartItemType } from '@/types/cart-item.type'

const { products } = defineProps<{
  products: CartItemType[] | null
}>()
</script>

<template>
  <div v-if="Array.isArray(products) && products.length === 0">Cart is empty</div>
  <div v-if="Array.isArray(products)" class="py-5 divide-y">
    <CartItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
