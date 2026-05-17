'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Inbox } from 'lucide-react'

import ErrorComp from '@/components/error-comp/ErrorComp'
import LoadingComp from '@/components/loading/LoadingComp'
import { deleteOrder, getOrders, updateOrderStatus } from '@/services/api'
import { Order } from '@/types/order'

import OrderCard from './components/card/OrderCard'

const AdminPage = () => {
  const queryClient = useQueryClient()

  const {
    data: orders,
    isLoading,
    isError,
    error
  } = useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: getOrders
  })

  const { mutate: performDelete, isPending: isDeleting } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    }
  })

  const { mutate: performStatusUpdate } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateOrderStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    }
  })

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingComp text="Fetching incoming orders..." />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <ErrorComp message={error.message} keyArray={['orders']} />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-50/50 p-4 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-400 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {orders && orders.length > 0 && (
            <div className="self-start px-2.5 py-1 text-xl font-bold text-neutral-800 sm:self-center dark:bg-neutral-800 dark:text-neutral-200">
              Total: {orders.length}
            </div>
          )}
        </div>

        {orders?.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full bg-neutral-100 p-5 dark:bg-neutral-900">
              <Inbox className="size-10 text-neutral-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              No orders found
            </h3>
            <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Everything is caught up! When clients place orders, they will
              populate here in real-time.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {orders?.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onDelete={() => performDelete(order.id)}
                isDeleting={isDeleting}
                onChangeStatus={(value: string) => {
                  performStatusUpdate({ id: order.id, status: value })
                }}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default AdminPage
