import { Dispatch, SetStateAction } from 'react'

import { MenuItem } from '@/types/menu'

interface CartItemProps {
  id: MenuItem['id']
  quantity: number
}

interface CartItemResults {
  id: string
  price: number
  image?: URL | string
  name?: string
}

interface ActionProps {
  cart: CartItemProps[]
  itemId: string | `menu-item-${number}`
  setCart: Dispatch<SetStateAction<CartItemProps[]>>
}

export type { ActionProps, CartItemProps, CartItemResults }
