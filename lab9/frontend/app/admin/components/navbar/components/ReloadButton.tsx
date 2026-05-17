'use client'

import { useIsFetching, useQueryClient } from '@tanstack/react-query'
import { cx } from 'class-variance-authority'
import { RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ReloadButton = () => {
  const queryClient = useQueryClient()
  const isFetching = useIsFetching({ queryKey: ['orders'] })
  const isLoading = isFetching > 0

  const handleReload = () => {
    queryClient.invalidateQueries({ queryKey: ['orders'] })
  }

  return (
    <Button
      onClick={handleReload}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className="gap-2 text-xs font-medium text-neutral-700 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
    >
      <RefreshCw
        className={cx('size-3.5', isLoading && 'animate-spin text-neutral-400')}
      />
      {isLoading ? 'Syncing...' : 'Reload Orders'}
    </Button>
  )
}

export default ReloadButton
