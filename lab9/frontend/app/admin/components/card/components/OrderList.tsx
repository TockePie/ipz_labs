import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import { CardContent, CardDescription } from '@/components/ui/card'
import { getMenu } from '@/lib/api'
import { Order } from '@/types/order'

const OrderList = ({ order }: { order: Order }) => {
  const {
    data = [],
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  const mergedOrder = useMemo(() => {
    return order.items.flatMap((orderItem) => {
      const menuItem = data.find((item) => item.id === orderItem.id)
      if (!menuItem) return []

      return {
        ...menuItem,
        quantity: orderItem.quantity
      }
    })
  }, [order, data])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <ErrorComp message={error.message} keyArray={['menu']} />
  }

  return (
    <CardContent className="pt-4">
      {mergedOrder.map((item, index) => (
        <CardDescription key={index} className="flex justify-between">
          <p>{item.name}</p>
          <p>{order.items[index]?.quantity}</p>
        </CardDescription>
      ))}
    </CardContent>
  )
}

export default OrderList
