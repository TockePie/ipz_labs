'use client'

import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import { useCartStore } from '@/hooks/use-cart-store'
import useTotalPrice from '@/hooks/use-total-price'
import { getMenu } from '@/services/api'

import CartFooterSection from './components/CartFooter'
import CartItem from './components/CartItem'
import EmptyCart from './components/EmptyCart'

const CartPage = () => {
  const cart = useCartStore((state) => state.cart)
  const removeItem = useCartStore((state) => state.removeItem)
  const totalPrice = useTotalPrice()

  const {
    data = [],
    isLoading,
    isError,
    error
  } = useQuery({
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

  if (isLoading) {
    return <p className="min-h-screen">Loading menu items...</p>
  }

  if (isError) {
    return <ErrorComp message={error.message} keyArray={['cart']} />
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="mb-6 flex flex-col items-center gap-y-3 dark:bg-black">
      <ul className="mx-auto w-[90vw]">
        {mergedCart.map((item) => (
          <CartItem
            key={item.id}
            onRemove={() => removeItem(item.id)}
            {...item}
          />
        ))}
      </ul>

      <CartFooterSection totalPrice={totalPrice} />
    </div>
  )
}

export default CartPage
