import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductItemType } from '@/types/product-item.type'
import type { CartItemType } from '@/types/cart-item.type'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItemType[]>([])
  const addToCart = (productItem: ProductItemType, qty: number) => {
    const index = cartItems.value.findIndex((cartItem) => cartItem.id === productItem.id)

    if (index === -1) {
      cartItems.value.push({
        ...productItem,
        qty: Math.min(qty, productItem.availableAmount)
      })
    } else {
      const cartItem = cartItems.value[index]
      const newQty = cartItem.qty + qty

      cartItem.qty = Math.min(newQty, productItem.availableAmount)
    }
  }

  return { cartItems, addToCart }
})
