import MenuBar from '@/components/menu-bar/MenuBar'

const MenuLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      {children}
      <MenuBar />
    </>
  )
}

export default MenuLayout
