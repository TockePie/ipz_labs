export type ItemId = `menu-item-${number}`

export interface Dish {
  id: ItemId
  name: string
  description: string
  image: string
  price: number
  category: string
}

export interface StorageDish {
  id: ItemId
  quantity: number
}

export type CartDish = Omit<Dish, 'description' | 'category'> &
  Pick<StorageDish, 'quantity'>
