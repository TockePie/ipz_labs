import useCart from '@/hooks/use-cart'
import { CartItemProps } from '@/types/cart'

const TotalSection = () => {
  const { cart, results } = useCart()

  return (
    <div className="flex w-[70vw] justify-between">
      <p className="text-2xl dark:text-neutral-300">Total:</p>
      <b className="text-2xl text-amber-600">
        $
        {cart.reduce((acc: number, item: CartItemProps) => {
          const dishItem = results.data.find((dish) => dish?.id === item.id)
          return acc + (dishItem?.price ?? 0) * item.quantity
        }, 0)}
      </b>
    </div>
  )
}

export default TotalSection
