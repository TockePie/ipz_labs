import { Trash2 } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { ActionProps, CartItemProps, CartItemResults } from '@/types/cart'
import removeItem from '@/utils/remove-from-cart'

interface CartItemFnProps {
  item: CartItemProps
  results: {
    data: CartItemResults[]
  }
  cart: ActionProps['cart']
  setCart: ActionProps['setCart']
}

const CartItem = ({ item, results, cart, setCart }: CartItemFnProps) => {
  const dishItem = results.data.find((dish) => dish?.id === item.id)

  return (
    <Card
      key={item.id}
      className="my-3 flex p-3 dark:border-neutral-600 dark:bg-neutral-900"
    >
      <Image
        src={dishItem?.image?.toString() || '/default-image.png'}
        alt={dishItem?.name || 'Dish image'}
        width={100}
        height={100}
        className="rounded-md"
      />

      <div className="ml-2 flex flex-col justify-start">
        <CardTitle className="text-lg dark:text-white">
          {dishItem?.name}
        </CardTitle>
        <CardDescription>
          {item.quantity} item{item.quantity > 1 ? 's' : ''}
        </CardDescription>
        <CardDescription className="text-amber-600">
          ${(dishItem?.price ?? 0) * item.quantity}
        </CardDescription>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="ml-auto dark:bg-neutral-800"
        onClick={() =>
          removeItem({
            cart,
            setCart,
            itemId: item.id
          })
        }
      >
        <Trash2 strokeWidth={1.5} className="dark:text-white" />
      </Button>
    </Card>
  )
}

export default CartItem
