<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { BIconCart, BIconXLg, BIconList } from 'bootstrap-icons-vue'
import { useCartStore } from '@/stores/cart'
import type { Ref } from 'vue'

const isNavOpened: Ref<boolean> = ref(false)

const handleToggleNav = (): void => {
  isNavOpened.value = !isNavOpened.value
}
const handleCloseNav = (): void => {
  if (isNavOpened.value) {
    isNavOpened.value = false
  }
}

const { getCartItems } = useCartStore()
const getTotalQty = () => getCartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0)
</script>

<template>
  <header class="bg-indigo-900 text-white">
    <div class="container max-w-screen-xl mx-auto">
      <nav class="flex items-center h-16 md:h-auto px-3 md:px-0">
        <RouterLink to="/" class="mr-10">
          <img src="@/assets/images/logo.png" alt="Aldi" class="w-8 md:w-16 mt-1 md:mt-0 mb-2" />
        </RouterLink>

        <div
          class="flex-col md:self-stretch md:flex-row md:items-center gap-y-3 md:gap-y-0 md:gap-x-10 px-5 py-3 md:p-0"
          :class="
            isNavOpened
              ? 'flex absolute top-16 left-0 right-0 bg-blue-950 md:static md:bg-transparent'
              : 'hidden md:flex'
          "
        >
          <RouterLink
            to="/"
            active-class="nav-item-active"
            class="nav-item nav-item-home"
            @click="handleToggleNav"
          >
            <span>Home</span>
          </RouterLink>

          <RouterLink
            to="/products"
            active-class="nav-item-active"
            class="nav-item nav-item-products"
            @click="handleToggleNav"
          >
            <span>Products</span>
          </RouterLink>
        </div>

        <RouterLink
          to="/cart"
          active-class="nav-item-active"
          class="nav-item nav-item-cart ml-auto md:px-3 text-xl"
          @click="handleCloseNav"
        >
          <span class="text-base mr-2">Cart</span>
          <span class="relative">
            <BIconCart />
            <div
              v-if="getTotalQty() > 0"
              class="badge badge-secondary absolute -top-1 left-4 px-1 cart-qty"
            >
              {{ getTotalQty() }}
            </div>
          </span>
        </RouterLink>
        <button
          type="button"
          class="bg-none text-white text-xl ml-2 md:hidden"
          @click="handleToggleNav"
        >
          <component :is="isNavOpened ? BIconXLg : BIconList" />
        </button>
      </nav>
    </div>
  </header>
</template>
