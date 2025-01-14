'use client'

import { useMutation } from '@tanstack/react-query'

import useCart from '@/hooks/use-cart'
import usePrepareOrder from '@/hooks/use-prepare-order'
import { sendOrder } from '@/services/api'
import { Customer } from '@/types/customer'

import OrderForm from './components/OrderForm'
import StatusAlerts from './components/StatusAlerts'
import TotalSection from './components/TotalSection'

const CheckoutPage = () => {
  const { cart, setCart, results } = useCart()
  const prepareOrder = usePrepareOrder(cart, results)

  const { isPending, mutate, status } = useMutation({
    mutationFn: async (order: Customer) => {
      const orderData = {
        ...prepareOrder(order),
        totalPrice: Number(prepareOrder(order).totalPrice)
      }
      await sendOrder(orderData)
    },
    onError: (error) => {
      console.log('Error sending order', error)
    },
    onSuccess: () => {
      localStorage.removeItem('cart')
      setCart([])
    }
  })

  return (
    <div className="flex flex-col items-center gap-4">
      <TotalSection />
      <OrderForm isPending={isPending} mutate={mutate} />
      <StatusAlerts status={status} />
    </div>
  )
}

export default CheckoutPage
