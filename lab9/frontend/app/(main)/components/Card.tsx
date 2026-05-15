'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Dish } from '@/types/dish'

interface Props extends Dish {
  onAdd: () => void
}

const CardItem = ({ image, name, price, description, onAdd }: Props) => {
  return (
    <Card className="dark:border-neutral-600 dark:bg-neutral-900">
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

      <CardFooter>
        <Button onClick={onAdd} className="w-full">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardItem
