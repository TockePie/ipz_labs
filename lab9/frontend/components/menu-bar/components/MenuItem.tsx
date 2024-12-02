import { ReactNode } from 'react'
import Link from 'next/link'

interface MenuItemProps {
  href: string
  children: ReactNode
  title?: string
}

const MenuItem = ({ href, children, title }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 text-neutral-600 dark:text-neutral-200"
      role="menuitem"
    >
      {children}
      {title && <span>{title}</span>}
    </Link>
  )
}

export default MenuItem
