import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface OrderFormProps {
  isPending: boolean
  formAction: (formData: FormData) => void
}

const OrderForm = ({ isPending, formAction }: OrderFormProps) => {
  return (
    <form action={formAction} className="flex w-[80vw] flex-col gap-4">
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="text" name="surname" placeholder="Your Surname" required />
      <Input type="text" name="address" placeholder="Your Address" required />
      <Input type="number" name="phone" placeholder="Your Phone" required />

      <Button disabled={isPending} type="submit">
        {isPending ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

export default OrderForm
