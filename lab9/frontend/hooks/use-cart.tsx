import { useEffect, useState } from 'react'
import { useQueries } from '@tanstack/react-query'

import { getMenuItem } from '@/services/api'
import { CartItemProps } from '@/types/cart'

const useCart = () => {
  const [cart, setCart] = useState<CartItemProps[]>([])

  useEffect(() => {
    const cartData = localStorage.getItem('cart')
    setCart(cartData ? JSON.parse(cartData) : [])
  }, [])

  const results = useQueries({
    queries: cart.map((item: { id: string }) => ({
      queryKey: ['menu', item.id],
      queryFn: () => getMenuItem(item.id)
    })),
    combine: (data) => {
      return {
        data: data.map((result) => result.data),
        isLoading: data.some((result) => result.isLoading),
        isError: data.some((result) => result.isError),
        error: data.find((result) => result.isError)?.error
      }
    }
  })

  return { cart, setCart, results }
}

export default useCart
