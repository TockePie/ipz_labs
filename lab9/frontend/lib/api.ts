import { Dish } from '@/types/dish'
import { Order } from '@/types/order'

const BASE_URL = 'http://localhost:5000'

const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`, options)

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

const getMenu = async () => {
  return request<Dish[]>('/menu')
}

const getOrders = async () => {
  return request<Order[]>('/orders')
}

const sendOrder = async (order: Order) => {
  return request('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
}

const updateOrderStatus = async (id: string, status: string) => {
  return request(`/orders/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status })
  })
}

const deleteOrder = async (id: string) => {
  return request(`/orders/${id}`, {
    method: 'DELETE'
  })
}

export { deleteOrder, getMenu, getOrders, sendOrder, updateOrderStatus }
