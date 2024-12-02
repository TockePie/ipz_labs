import { ReactNode } from 'react'

import Navbar from './components/navbar/Navbar'

const metadata = {
  title: 'Admin Page'
}

const CartLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export { metadata }
export default CartLayout
