import express from 'express'
import cors from 'cors'
import pkg from 'body-parser'
const { json } = pkg
import { join } from 'path'
import { fileURLToPath } from 'node:url'

import { MenuManager } from './classes/menu-manager.js'
import { OrderManager } from './classes/order-manager.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const PORT = 5000
const app = express()

const menuFilePath = join(__dirname, './data/menu.json')
const ordersFilePath = join(__dirname, './data/orders.json')

const menuManager = new MenuManager(menuFilePath)
const orderManager = new OrderManager(ordersFilePath)

app.use(json())
app.use(cors())

app.get('/menu', (_, res) => {
  const action = menuManager.getAllMenuItems()

  res.json(action)
})

app.post('/menu', (req, res) => {
  const newMenuItem = req.body
  const action = menuManager.addMenuItem(newMenuItem)

  res.status(201).json({ message: 'Menu item added', item: action })
})

app.get('/menu/:id', (req, res) => {
  const { id } = req.params
  const action = menuManager.getMenuItemById(id)

  if (!action) {
    res.status(404).json({ message: 'Menu item not found' })
  } else {
    res.json(action)
  }
})

app.get('/orders', (_, res) => {
  const action = orderManager.getAllOrders()

  res.json(action)
})

app.post('/orders', (req, res) => {
  const newOrder = req.body
  const action = orderManager.addOrder(newOrder)

  res.status(201).json({ message: 'Order created', order: action })
})

app.get('/orders/:id', (req, res) => {
  const { id } = req.params
  const action = orderManager.getOrderById(id)

  if (!action) {
    res.status(404).json({ message: 'Order not found' })
  } else {
    res.json(action)
  }
})

app.patch('/orders/:id', (req, res) => {
  const { id } = req.params
  const { status } = req.body
  const action = orderManager.updateOrderStatus(id, status)

  if (!action) {
    res.status(404).json({ message: 'Order not found' })
  } else {
    res.json({ message: 'Order status updated', order: action })
  }
})

app.delete('/orders/:id', (req, res) => {
  const { id } = req.params
  const action = orderManager.deleteOrder(id)

  if (!action) {
    res.status(404).json({ message: 'Order not found' })
  } else {
    res.json({ message: 'Order deleted', order: action })
  }
})

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
