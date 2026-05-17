import { CircleCheck } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const StatusAlerts = ({ status }: { status: string }) => {
  if (status !== 'success') return null

  return (
    <Alert className="border border-green-500">
      <CircleCheck className="h-4 w-4" strokeWidth={1.5} />
      <AlertTitle>Your order has been sent!</AlertTitle>
      <AlertDescription>Thank you for your purchase!</AlertDescription>
    </Alert>
  )
}

export default StatusAlerts
