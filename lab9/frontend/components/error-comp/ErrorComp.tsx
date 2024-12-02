import { FC } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'

interface ErrorCompProps {
  message?: string
  keyArray: string[]
}

const ErrorComp: FC<ErrorCompProps> = ({
  message = 'Unknown error',
  keyArray
}) => {
  const queryClient = useQueryClient()

  const handleRetry = () =>
    queryClient.invalidateQueries({
      queryKey: keyArray
    })

  return (
    <div className="flex min-h-screen w-56 flex-col items-center gap-y-2">
      <p>Error: {message}</p>
      <Button className="w-full" onClick={handleRetry}>
        Retry
      </Button>
    </div>
  )
}

export default ErrorComp
