<script setup lang="ts">
import CartList from '@/components/CartList.vue'

import { useCartStore } from '@/stores/cart'

const { cartItems } = useCartStore()
</script>

<template>
  <CartList :products="cartItems" />
</template>
