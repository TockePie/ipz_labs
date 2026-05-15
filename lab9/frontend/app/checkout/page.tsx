'use client'

import { useActionState, useEffect } from 'react'

import { useCartStore } from '@/hooks/use-cart-store'
import useTotalPrice from '@/hooks/use-total-price'
import { sendOrder } from '@/services/api'
import { Customer } from '@/types/customer'

import OrderForm from './components/OrderForm'
import StatusAlerts from './components/StatusAlerts'
import TotalSection from './components/TotalSection'

interface ActionState {
  status: 'idle' | 'pending' | 'success' | 'error'
  error?: string
}

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart)
  const clearCart = useCartStore((state) => state.clearCart)
  const totalPrice = useTotalPrice()

  const handleOrderSubmit = async (
    prevState: ActionState,
    formData: FormData
  ): Promise<ActionState> => {
    const customer: Customer = {
      name: formData.get('name') as string,
      surname: formData.get('surname') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string
    }

    const orderPayload = {
      id: `order-${new Date().getTime()}`,
      items: cart,
      customerDetails: customer,
      status: 'inactive',
      totalPrice
    }

    try {
      await sendOrder(orderPayload)
      return { status: 'success' }
    } catch (error) {
      console.error('Error sending order', error)
      return { status: 'error', error: 'Failed to submit order' }
    }
  }

  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    handleOrderSubmit,
    { status: 'idle' }
  )

  useEffect(() => {
    if (state.status === 'success') {
      clearCart()
    }
  }, [state.status, clearCart])

  return (
    <div className="flex flex-col items-center gap-4">
      <TotalSection totalPrice={totalPrice} />
      <OrderForm isPending={isPending} formAction={formAction} />
      <StatusAlerts status={state.status} />
    </div>
  )
}

export default CheckoutPage
