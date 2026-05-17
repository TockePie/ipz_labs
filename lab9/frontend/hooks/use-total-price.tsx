import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getMenu } from '@/lib/api'

import { useCartStore } from './use-cart-store'

const useTotalPrice = () => {
  const cart = useCartStore((state) => state.cart)

  const { data = [] } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  const mergedCart = useMemo(() => {
    return cart.flatMap((cartItem) => {
      const menuItem = data.find((item) => item.id === cartItem.id)
      if (!menuItem) return []

      return {
        ...menuItem,
        quantity: cartItem.quantity
      }
    })
  }, [cart, data])

  const totalPrice = mergedCart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return totalPrice
}

export default useTotalPrice
