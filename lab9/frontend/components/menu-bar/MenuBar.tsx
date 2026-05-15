import { cx } from 'class-variance-authority'
import { ShoppingCart, Utensils } from 'lucide-react'

import MenuItem from './components/MenuItem'

const MenuBar = () => {
  return (
    <ul
      role="menubar"
      className={cx(
        'sticky bottom-0 z-10 grid grid-cols-2 justify-items-center p-5 backdrop-blur-lg',
        'border-t border-neutral-300 dark:border-neutral-700',
        'bg-neutral-50/90 dark:bg-neutral-900/90'
      )}
    >
      <MenuItem title="Menu" href="/">
        <Utensils strokeWidth={1.5} />
      </MenuItem>

      <MenuItem title="Cart" href="/cart">
        <ShoppingCart strokeWidth={1.5} />
      </MenuItem>
    </ul>
  )
}

export default MenuBar
