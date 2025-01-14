import { useQueries } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import { CardContent, CardDescription } from '@/components/ui/card'
import { getMenuItem } from '@/services/api'
import { OrderProps } from '@/types/order'

const CardOrderItems = ({ order }: { order: OrderProps }) => {
  const results = useQueries({
    queries: order.items.map((item) => ({
      queryKey: ['menu', item.id],
      queryFn: () => getMenuItem(item.id)
    })),
    combine: (data) => {
      return {
        data: data.map((result) => result.data),
        isLoading: data.some((result) => result.isLoading),
        isError: data.some((result) => result.isError),
        error: data.find((result) => result.isError)?.error
      }
    }
  })

  if (results.isLoading) {
    return <p>Loading...</p>
  }

  if (results.isError) {
    return <ErrorComp message={results.error!.message} keyArray={['menu']} />
  }

  return (
    <CardContent className="pt-4">
      {results.data.map((item, index) => (
        <CardDescription key={index} className="flex justify-between">
          <p>{item!.name}</p>
          <p>{order.items[index].quantity}</p>
        </CardDescription>
      ))}
    </CardContent>
  )
}

export default CardOrderItems
