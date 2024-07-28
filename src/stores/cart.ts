import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductItemType } from '@/types/product-item.type'
import type { CartItemType } from '@/types/cart-item.type'

export const useCartStore = defineStore('cart', () => {
  const cartItems = reactive<CartItemType[]>([])
  const getCartItems = computed(() => cartItems)

  const addToCart = (productItem: ProductItemType, qty: number) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === productItem.id)

    if (index === -1) {
      cartItems.push({
        ...productItem,
        qty: Math.min(qty, productItem.availableAmount)
      })
    } else {
      const cartItem = cartItems[index]
      const newQty = cartItem.qty + qty

      cartItem.qty = Math.min(newQty, productItem.availableAmount)
    }
  }

  const updateCartItem = (id: string, qty: number) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === id)
    const cartItem = cartItems[index]

    cartItem.qty = Math.min(qty, cartItem.availableAmount)
  }

  const deleteCartItem = (id: string) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === id)

    cartItems.splice(index, 1)
  }

  return { cartItems, getCartItems, addToCart, updateCartItem, deleteCartItem }
})
