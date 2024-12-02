'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import ErrorComp from '@/components/error-comp/ErrorComp'
import LoadingComp from '@/components/loading/LoadingComp'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import useCart from '@/hooks/use-cart'
import { getMenu } from '@/services/api'
import { MenuItem } from '@/types/menu'
import addToCart from '@/utils/add-to-cart'

const CardSection = () => {
  const { cart, setCart } = useCart()
  const fallback: MenuItem[] = []

  const {
    data = fallback,
    error,
    isError,
    isLoading
  } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  if (isLoading) {
    return <LoadingComp text="Loading menu items..." />
  }

  if (isError) {
    return <ErrorComp message={error.message} keyArray={['menu']} />
  }

  return (
    <ul>
      {data.map(({ id, image, name, price, description }: MenuItem) => (
        <Card
          key={id}
          className="my-4 dark:border-neutral-600 dark:bg-neutral-900"
        >
          <CardHeader>
            <Image
              src={image.toString()}
              alt={name}
              width={300}
              height={200}
              className="rounded-lg"
            />
          </CardHeader>

          <CardContent>
            <CardTitle className="dark:text-white">{name}</CardTitle>
            <CardDescription className="max-w-72 py-1 text-amber-600">
              ${price}
            </CardDescription>
            <CardDescription className="max-w-72 py-1 dark:text-neutral-300">
              {description}
            </CardDescription>
          </CardContent>

          <CardFooter className="flex gap-x-2">
            <Button
              onClick={() => addToCart({ cart, itemId: id, setCart })}
              className="w-full"
            >
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </ul>
  )
}

export default CardSection
