'use client'

import { MapPin, Phone, User, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Order } from '@/types/order'

import OrderList from './components/OrderList'
import StatusTabs from './components/StatusTabs'

interface Props {
  order: Order
  onDelete: () => void
  isDeleting: boolean
  onChangeStatus: (value: string) => void
}

const OrderCard = ({ order, onDelete, isDeleting, onChangeStatus }: Props) => {
  const shortId = order.id.split('-')[1] || order.id.substring(0, 6)

  return (
    <Card className="relative overflow-hidden border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
              Order
            </span>
            <CardTitle className="font-mono text-base font-semibold text-neutral-900 dark:text-neutral-50">
              #{shortId}
            </CardTitle>
          </div>

          {order.status === 'completed' && (
            <Button
              size="icon"
              variant="ghost"
              disabled={isDeleting}
              onClick={onDelete}
              aria-label="Delete completed order"
            >
              <X className={`h-4 w-4 ${isDeleting ? 'animate-pulse' : ''}`} />
            </Button>
          )}
        </div>

        <span className="py-1 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          ${order.totalPrice.toFixed(2)}
        </span>

        <div className="space-y-1.5 border-t border-neutral-100 pt-3 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <User className="size-3.5 shrink-0 text-neutral-400" />
            <span className="truncate font-medium text-neutral-800 dark:text-neutral-200">
              {order.customerDetails.name}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <Phone className="size-3.5 shrink-0 text-neutral-400" />
            <span className="font-mono">{order.customerDetails.phone}</span>
          </div>

          <div className="flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-neutral-400" />
            <span className="line-clamp-2 leading-relaxed">
              {order.customerDetails.address}
            </span>
          </div>
        </div>
      </CardHeader>

      <div className="border-t border-neutral-100 dark:border-neutral-800" />

      <OrderList order={order} />

      <div className="border-t border-neutral-100 dark:border-neutral-800" />

      <CardFooter className="w-full justify-center bg-neutral-50/50 py-3 dark:bg-neutral-900/30">
        <StatusTabs
          current={order.status}
          onChange={(value: string) => onChangeStatus(value)}
        />
      </CardFooter>
    </Card>
  )
}

export default OrderCard
