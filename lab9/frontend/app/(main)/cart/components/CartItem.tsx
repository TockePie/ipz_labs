import { Trash2 } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { CartDish } from '@/types/dish'

interface Props extends CartDish {
  onRemove: () => void
}

const CartItem = ({ name, image, price, quantity, onRemove }: Props) => {
  return (
    <Card className="my-3 flex p-3 dark:border-neutral-600 dark:bg-neutral-900">
      <Image
        src={image || '/default-image.png'}
        alt={name || 'Dish image'}
        width={100}
        height={100}
        className="rounded-md"
      />

      <div className="ml-2 flex flex-col justify-start">
        <CardTitle className="text-lg dark:text-white">{name}</CardTitle>
        <CardDescription>
          {quantity} item{quantity > 1 ? 's' : ''}
        </CardDescription>
        <CardDescription className="text-amber-600">
          ${(price ?? 0) * quantity}
        </CardDescription>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="ml-auto dark:bg-neutral-800"
        onClick={onRemove}
      >
        <Trash2 strokeWidth={1.5} className="dark:text-white" />
      </Button>
    </Card>
  )
}

export default CartItem
