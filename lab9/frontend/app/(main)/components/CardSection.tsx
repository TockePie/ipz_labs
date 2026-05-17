'use client'

import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import LoadingComp from '@/components/loading/LoadingComp'
import { useCartStore } from '@/hooks/use-cart-store'
import { getMenu } from '@/lib/api'

import CardItem from './Card'

const CardSection = () => {
  const addItem = useCartStore((state) => state.addItem)

  const { data, error, isError, isLoading } = useQuery({
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
    <ul className="space-y-4">
      {data?.map((item) => (
        <CardItem key={item.id} onAdd={() => addItem(item.id)} {...item} />
      ))}
    </ul>
  )
}

export default CardSection
