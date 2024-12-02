'use client'

import ErrorComp from '@/components/error-comp/ErrorComp'
import useCart from '@/hooks/use-cart'
import { CartItemProps } from '@/types/cart'

import CartFooterSection from './components/CartFooter'
import CartItem from './components/CartItem'
import EmptyCart from './components/EmptyCart'

const CartPage = () => {
  const { cart, setCart, results } = useCart()

  if (results.isLoading) {
    return <p className="min-h-screen">Loading menu items...</p>
  }

  if (results.isError) {
    return <ErrorComp message={results.error?.message} keyArray={['cart']} />
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }

  const filteredResults = results.data.filter((dish) => dish !== undefined)

  return (
    <div className="mb-6 flex flex-col items-center gap-y-3 dark:bg-black">
      <ul className="mx-auto w-[90vw]">
        {cart.map((item: CartItemProps) => (
          <CartItem
            key={item.id}
            item={item}
            results={{ ...results, data: filteredResults }}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </ul>

      <CartFooterSection
        cart={cart}
        results={{ ...results, data: filteredResults }}
      />
    </div>
  )
}

export default CartPage
