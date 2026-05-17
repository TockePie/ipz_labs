import { Customer } from './customer'
import { StorageDish } from './dish'

export interface Order {
  items: StorageDish[]
  customerDetails: Customer
  totalPrice: number
  status: 'inactive' | 'cooking' | 'completed'
  id: string
}
