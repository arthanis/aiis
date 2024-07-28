<script setup lang="ts">
import CartList from '@/components/CartList.vue'
import { useCartStore } from '@/stores/cart'

const { getCartItems } = useCartStore()
</script>

<template>
  <CartList :products="getCartItems" />
</template>
