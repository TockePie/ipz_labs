import Link from 'next/link'

import { Button } from '@/components/ui/button'

const CartFooterSection = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <>
      <div className="flex w-[80vw] justify-between text-2xl">
        <p className="dark:text-white">Total:</p>
        <b className="text-amber-600">${totalPrice}</b>
      </div>
      <Link href="/checkout" className="flex w-[80vw] justify-center">
        <Button>Checkout</Button>
      </Link>
    </>
  )
}

export default CartFooterSection
