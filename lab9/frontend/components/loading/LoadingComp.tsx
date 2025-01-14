import React, { FC } from 'react'

interface LoadingCompProps {
  text: string
}

const LoadingComp: FC<LoadingCompProps> = ({ text }) => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center dark:bg-black"
      aria-live="polite"
    >
      <p className="text-2xl font-bold">{text}</p>
    </div>
  )
}

export default LoadingComp
