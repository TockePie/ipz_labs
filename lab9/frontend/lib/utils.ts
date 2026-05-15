import { cx } from 'class-variance-authority'
import { ClassValue } from 'class-variance-authority/types'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => {
  return twMerge(cx(inputs))
}

export { cn }
