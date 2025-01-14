import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { CartItemProps, CartItemResults } from '@/types/cart'

const CartFooterSection = ({
  cart,
  results
}: {
  cart: CartItemProps[]
  results: { data: CartItemResults[] }
}) => {
  return (
    <>
      <div className="flex w-[80vw] justify-between">
        <p className="text-2xl dark:text-white">Total:</p>
        <b className="text-2xl text-amber-600">
          $
          {cart.reduce((acc, item) => {
            const dishItem = results.data.find((dish) => dish?.id === item.id)
            return acc + (dishItem?.price ?? 0) * item.quantity
          }, 0)}
        </b>
      </div>
      <Link href="/checkout" className="flex w-[80vw] justify-center">
        <Button>Checkout</Button>
      </Link>
    </>
  )
}

export default CartFooterSection
