import { CartItemProps } from '@/types/cart'

import { Customer } from './customer'

interface OrderProps {
  items: CartItemProps[]
  customerDetails: Customer
  totalPrice: number
  status: 'inactive' | 'cooking' | 'completed'
  id: string
}

export type { OrderProps }
