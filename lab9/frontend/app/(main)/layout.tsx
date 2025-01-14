import { ReactNode } from 'react'

import MenuBar from '@/components/menu-bar/MenuBar'

const MenuLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      {children}
      <MenuBar />
    </>
  )
}

export default MenuLayout
