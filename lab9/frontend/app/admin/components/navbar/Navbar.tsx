import { ShieldAlert } from 'lucide-react'

import ReloadButton from './components/ReloadButton'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950">
            <ShieldAlert className="size-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Admin Console
          </span>
        </div>

        <ReloadButton />
      </div>
    </header>
  )
}

export default Navbar
