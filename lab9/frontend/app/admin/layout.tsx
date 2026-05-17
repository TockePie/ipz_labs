import Navbar from './components/navbar/Navbar'

const metadata = {
  title: 'Admin Page'
}

const AdminLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export { metadata }
export default AdminLayout
