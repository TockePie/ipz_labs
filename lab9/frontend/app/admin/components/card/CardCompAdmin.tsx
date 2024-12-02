import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { deleteOrder } from '@/services/api'
import { OrderProps } from '@/types/order'

import CardOrderItems from './components/CardOrderItems'
import StatusTabs from './components/StatusTabs'

interface CardCompAdminProps {
  order: OrderProps
  key: string
}

const CardCompAdmin = ({ order }: CardCompAdminProps) => {
  const queryClient = useQueryClient()
  const [status, setStatus] = useState(order.status)

  useEffect(() => setStatus(order.status), [order.status])

  const handleDeleteOrder = () => {
    deleteOrder(order.id)
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] === 'orders'
    })
  }

  return (
    <Card key={order.id}>
      <CardHeader>
        <div className="flex w-full justify-between">
          <CardTitle className="text-xl">{order.id.split('-')[1]}</CardTitle>
          <Button
            size="icon"
            variant="secondary"
            className={clsx(
              'right-2 top-2 rounded-full',
              status !== 'completed' && 'hidden'
            )}
            onClick={handleDeleteOrder}
          >
            <X strokeWidth={1.5} />
          </Button>
        </div>
        <CardDescription>${order.totalPrice}</CardDescription>
        <CardDescription>{order.customerDetails.phone}</CardDescription>
        <CardDescription>{order.customerDetails.name}</CardDescription>
        <CardDescription>{order.customerDetails.address}</CardDescription>
      </CardHeader>

      <hr className="border-t border-neutral-800" />

      <CardOrderItems order={order} />

      <CardFooter className="w-full justify-center">
        <StatusTabs status={status} id={order.id} />
      </CardFooter>
    </Card>
  )
}

export default CardCompAdmin
