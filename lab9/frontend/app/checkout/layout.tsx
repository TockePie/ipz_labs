import { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const metadata = {
  title: 'Checkout'
}

const CartLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <Link href="/cart" className="absolute left-4 top-4">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full dark:border dark:border-neutral-700 dark:bg-neutral-800"
        >
          <ChevronLeft strokeWidth={1.5} className="dark:text-neutral-300" />
        </Button>
      </Link>
      <h1 className="my-12 text-4xl font-extrabold dark:text-white">
        Checkout
      </h1>
      {children}
    </div>
  )
}

export { metadata }
export default CartLayout
