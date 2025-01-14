import axios from 'axios'

import { MenuItem } from '@/types/menu'
import { OrderProps } from '@/types/order'

const BASE_URL = 'http://localhost:5000'
const axiosInstance = axios.create({
  baseURL: BASE_URL
})

const getMenu = async () => {
  const response = await axiosInstance.get<MenuItem[]>('/menu')
  return response.data
}

const getMenuItem = async (id: string) => {
  const response = await axiosInstance.get<MenuItem>(`/menu/${id}`)
  return response.data
}

const getOrders = async () => {
  const response = await axiosInstance.get<OrderProps[]>('/orders')
  return response.data
}

const sendOrder = async (order: OrderProps) => {
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

export {
  deleteOrder,
  getMenu,
  getMenuItem,
  getOrders,
  sendOrder,
  updateOrderStatus
}
