import { useMemo, useState } from 'react'

import { CartItemProps } from '@/types/cart'
import { Customer } from '@/types/customer'
import { MenuItem } from '@/types/menu'

const usePrepareOrder = (
  cart: CartItemProps[],
  results: { data: (MenuItem | undefined)[] }
) => {
  const [date] = useState(new Date())

  const prepareOrder = (order: Customer) => {
    return {
      id: `order-${date}`,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
      customerDetails: {
        name: order.name,
        surname: order.surname,
        address: order.address,
        phone: order.phone
      },
      status: 'inactive',
      totalPrice: cart
        .reduce((acc: number, item: CartItemProps) => {
          const dishItem = results.data.find((dish) => dish?.id === item.id)
          return acc + (dishItem?.price ?? 0) * item.quantity
        }, 0)
        .toFixed(2)
    }
  }

  return useMemo(() => prepareOrder, [cart, results, date])
}

export default usePrepareOrder
