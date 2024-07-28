<script setup lang="ts">
import { ref } from 'vue'
import { BIconCart, BIconInfoCircleFill } from 'bootstrap-icons-vue'
import { useCartStore } from '@/stores/cart'
import type { ProductItemType } from '@/types/product-item.type'

const { product } = defineProps<{
  product: ProductItemType
}>()

const { addToCart } = useCartStore()
const qty = ref<number>(Math.max(product.minOrderAmount, 1))

const getPrice = (number: number): string => {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'EUR' }).format(number)
}
const handleAddToCart = (): void => {
  addToCart({ ...product }, qty.value)
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

    <div class="flex items-center gap-3 my-2">
      <input
        v-model.number="qty"
        type="number"
        class="input input-bordered input-sm w-16 pr-0 text-center"
        :min="product.minOrderAmount"
        :max="product.availableAmount"
        @blur="handleBlur"
      />
      <button
        type="button"
        class="btn btn-primary btn-sm btn-add-to-cart px-0 flex-1"
        @click="handleAddToCart"
      >
        Add to cart
        <BIconCart />
      </button>
    </div>
    <div
      class="tooltip"
      :data-tip="`Min order amount: ${product.minOrderAmount} | Max: ${product.availableAmount}`"
    >
      <div class="flex items-center">
        <span class="text-sm mr-2 text-green-400">
          <BIconInfoCircleFill />
        </span>
        <span class="text-green-400">Stock & cart info</span>
      </div>
    </div>
  </div>
</template>
