import axios from 'axios'

import { Dish } from '@/types/dish'
import { Order } from '@/types/order'

const BASE_URL = 'http://localhost:5000'
const axiosInstance = axios.create({
  baseURL: BASE_URL
})

const getMenu = async () => {
  const response = await axiosInstance.get<Dish[]>('/menu')
  return response.data
}

const getOrders = async () => {
  const response = await axiosInstance.get<Order[]>('/orders')
  return response.data
}

const sendOrder = async (order: Order) => {
  const response = await axiosInstance.post('/orders', order)
  return response.data
}

const updateOrderStatus = async (id: string, status: string) => {
  const response = await axiosInstance.patch(`/orders/${id}`, { status })
  return response.data
}

const deleteOrder = async (id: string) => {
  const response = await axiosInstance.delete(`/orders/${id}`)
  return response.data
}

export { deleteOrder, getMenu, getOrders, sendOrder, updateOrderStatus }
