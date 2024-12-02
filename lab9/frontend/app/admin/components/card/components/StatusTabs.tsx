import { FC } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { CircleCheck, CircleSlash, CookingPot } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { updateOrderStatus } from '@/services/api'
import { OrderProps } from '@/types/order'

interface StatusTabsProps {
  status: OrderProps['status']
  id: string
}

const StatusTabs: FC<StatusTabsProps> = ({ status, id }) => {
  const queryClient = useQueryClient()

  return (
    <Tabs
      defaultValue={status}
      onValueChange={(value) => {
        updateOrderStatus(id, value)
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === 'orders'
        })
      }}
    >
      <TabsList className="flex justify-center">
        <TabsTrigger value="inactive">
          <CircleSlash strokeWidth={1.5} />
        </TabsTrigger>
        <TabsTrigger value="cooking">
          <CookingPot strokeWidth={1.5} />
        </TabsTrigger>
        <TabsTrigger value="completed">
          <CircleCheck strokeWidth={1.5} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default StatusTabs
