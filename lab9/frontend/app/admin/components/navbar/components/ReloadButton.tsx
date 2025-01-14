'use client'

import { useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'

const ReloadButton = () => {
  const queryClient = useQueryClient()

  return (
    <Button
      onClick={() =>
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === 'orders'
        })
      }
      disabled={queryClient.isFetching() > 0}
      variant="secondary"
      className="border border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
    >
      Reload
    </Button>
  )
}

export default ReloadButton
