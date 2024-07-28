<script setup lang="ts">
import { ref } from 'vue'
import { BIconCart, BIconInfoCircleFill, BIconTrash } from 'bootstrap-icons-vue'
import { useCartStore } from '@/stores/cart'
import type { CartItemType } from '@/types/cart-item.type'

const { product } = defineProps<{
  product: CartItemType
}>()

const { updateCartItem, deleteCartItem } = useCartStore()
const qty = ref<number>(product.qty)

const getPrice = (number: number): string => {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'EUR' }).format(number)
}
const handleUpdateCartItem = (): void => {
  updateCartItem(product.id, qty.value)
}

const handleDeleteCartItem = (): void => {
  deleteCartItem(product.id)
}

const handleBlur = () => {
  if (qty.value < product.minOrderAmount) {
    qty.value = product.minOrderAmount
  }

  if (qty.value > product.availableAmount) {
    qty.value = product.availableAmount
  }
}
</script>

<template>
  <div class="md:flex py-3 my-5">
    <div class="flex">
      <div class="w-20 h-20px md:w-32 md:h-32 mr-3 md:mr-5 shadow">
        <img :src="product.img" :alt="product.name" class="h-24 md:h-32 object-cover" />
      </div>

      <div class="flex-1">
        <p class="font-bold text-black">
          {{ product.name }}
        </p>

        <p class="text-neutral-400">
          {{ getPrice(product.price) }}
        </p>

        <div
          class="tooltip text-sm"
          :data-tip="`Min order amount: ${product.minOrderAmount} | Max: ${product.availableAmount}`"
        >
          <div class="flex items-center">
            <span class="text-sm mr-2 text-neutral-500">
              <BIconInfoCircleFill />
            </span>
            <span class="text-neutral-500">Stock & cart info</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-3 my-2 md:w-auto ml-auto">
      <input
        v-model.number="qty"
        type="number"
        class="input input-bordered input-sm pr-0 text-center"
        :min="product.minOrderAmount"
        :max="product.availableAmount"
        @blur="handleBlur"
      />
      <button
        type="button"
        class="btn btn-primary btn-sm whitespace-nowrap"
        @click="handleUpdateCartItem"
      >
        Update
        <BIconCart />
      </button>
      <button
        type="button"
        class="btn btn-error btn-sm whitespace-nowrap"
        @click="handleDeleteCartItem"
      >
        Delete
        <BIconTrash />
      </button>
    </div>
  </div>
</template>
