import { ReactNode } from 'react'

const metadata = {
  title: 'Cart'
}

const CartLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="my-12 text-4xl font-extrabold dark:text-white">Cart</h1>
      {children}
    </div>
  )
}

export { metadata }
export default CartLayout
