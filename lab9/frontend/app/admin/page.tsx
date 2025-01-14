'use client'

import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import LoadingComp from '@/components/loading/LoadingComp'
import { getOrders } from '@/services/api'
import { OrderProps } from '@/types/order'

import CardCompAdmin from './components/card/CardCompAdmin'

const AdminPage = () => {
  const {
    data: orders,
    isLoading,
    isError,
    error
  } = useQuery<OrderProps[]>({
    queryKey: ['orders'],
    queryFn: getOrders,
    staleTime: 1000 * 5
  })

  if (isLoading) {
    return <LoadingComp text="Loading orders..." />
  }

  if (isError) {
    return <ErrorComp message={error.message} keyArray={['orders']} />
  }

  return (
    <div className="grid grid-cols-1 items-baseline gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {orders &&
        orders.map((order) => <CardCompAdmin key={order.id} order={order} />)}
    </div>
  )
}

export default AdminPage
