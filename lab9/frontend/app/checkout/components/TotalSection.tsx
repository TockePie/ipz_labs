const TotalSection = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="flex w-[70vw] justify-between">
      <p className="text-2xl dark:text-neutral-300">Total:</p>
      <b className="text-2xl text-amber-600">${totalPrice}</b>
    </div>
  )
}

export default TotalSection
