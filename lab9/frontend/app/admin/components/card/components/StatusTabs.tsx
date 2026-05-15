import { CircleCheck, CircleSlash, CookingPot } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface StatusTabsProps {
  current: string
  onChange: (value: string) => void
}

const StatusTabs = ({ current, onChange }: StatusTabsProps) => {
  return (
    <Tabs defaultValue={current} onValueChange={(value) => onChange(value)}>
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
