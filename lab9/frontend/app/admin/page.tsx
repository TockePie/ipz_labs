'use client'

import { useQuery } from '@tanstack/react-query'

import ErrorComp from '@/components/error-comp/ErrorComp'
import LoadingComp from '@/components/loading/LoadingComp'
import { getOrders } from '@/services/api'
import { Order } from '@/types/order'

import CardCompAdmin from './components/card/CardCompAdmin'

const AdminPage = () => {
  const {
    data: orders,
    isLoading,
    isError,
    error
  } = useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: getOrders
  })

  if (isLoading) {
    return <LoadingComp text="Loading orders..." />
  }

  if (isError) {
    return <ErrorComp message={error.message} keyArray={['orders']} />
  }

  if (orders?.length === 0) {
    return <p>No orders</p>
  }

  return (
    <div className="grid grid-cols-1 items-baseline gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {orders?.map((order) => (
        <CardCompAdmin key={order.id} order={order} />
      ))}
    </div>
  )
}

export default AdminPage
