import type { ProductItemType } from './product-item.type'

export type CartItemType = ProductItemType & { qty: number }
