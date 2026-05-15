import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import { CardContent, CardDescription } from '@/components/ui/card'
import { getMenu } from '@/services/api'
import { Order } from '@/types/order'

const CardOrderItems = ({ order }: { order: Order }) => {
  const {
    data = [],
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <ErrorComp message={error!.message} keyArray={['menu']} />
  }

  return (
    <CardContent className="pt-4">
      {data.map((item, index) => (
        <CardDescription key={index} className="flex justify-between">
          <p>{item!.name}</p>
          <p>{order.items[index]?.quantity}</p>
        </CardDescription>
      ))}
    </CardContent>
  )
}

export default CardOrderItems
