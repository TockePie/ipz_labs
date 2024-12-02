import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Customer } from '@/types/customer'

const OrderForm = ({
  isPending,
  mutate
}: {
  isPending: boolean
  mutate: (data: Customer) => void
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      address: '',
      phone: ''
    }
  })

  const handleCartSubmit: SubmitHandler<Customer> = (data) => mutate(data)

  return (
    <form
      onSubmit={handleSubmit(handleCartSubmit)}
      className="flex w-[80vw] flex-col gap-4"
    >
      <Input type="text" placeholder="Your Name" {...register('name')} />
      <Input type="text" placeholder="Your Surname" {...register('surname')} />
      <Input type="text" placeholder="Your Address" {...register('address')} />
      <Input type="number" placeholder="Your Phone" {...register('phone')} />
      <Button disabled={isPending} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default OrderForm
