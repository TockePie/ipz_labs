import ReloadButton from './components/ReloadButton'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b bg-neutral-100 p-3 px-5 dark:border-neutral-700 dark:bg-neutral-800">
      <h1 className="text-xl font-bold">Admin</h1>
      <ReloadButton />
    </nav>
  )
}

export default Navbar
