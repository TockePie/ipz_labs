import { JSONFileManager } from './json.js'

/**
 * Class to manage orders using a JSON file.
 */
export class OrderManager {
  /**
   * @param {string} filePath - The path to the JSON file.
   */
  constructor(filePath) {
    this.fileManager = new JSONFileManager(filePath)
  }

  /**
   * Retrieves all orders.
   * @returns {Array} The list of orders.
   */
  getAllOrders() {
    return this.fileManager.read()
  }

  /**
   * Retrieves an order by ID.
   * @param {string} orderId - The ID of the order to retrieve.
   * @returns {Object|null} The order, or null if not found.
   */
  getOrderById(orderId) {
    const orders = this.fileManager.read()
    return orders.find((o) => o.id === orderId)
  }

  /**
   * Adds a new order.
   * @param {Object} newOrder - The new order to add.
   * @returns {Object} The added order with an assigned ID.
   */
  addOrder(newOrder) {
    const orders = this.fileManager.read()
    newOrder.id = `order-${Date.now()}`
    orders.push(newOrder)
    this.fileManager.write(orders)
    return newOrder
  }

  /**
   * Updates the status of an order.
   * @param {string} orderId - The ID of the order to update.
   * @param {string} status - The new status of the order.
   * @returns {Object|null} The updated order, or null if not found.
   */
  updateOrderStatus(orderId, status) {
    const orders = this.fileManager.read()
    const order = orders.find((o) => o.id === orderId)
    if (!order) return null

    order.status = status
    this.fileManager.write(orders)
    return order
  }

  /**
   * Deletes an order.
   * @param {string} orderId - The ID of the order to delete.
   * @returns {Object|null} The deleted order, or null if not found.
   */
  deleteOrder(orderId) {
    const orders = this.fileManager.read()
    const orderIndex = orders.findIndex((o) => o.id === orderId)
    if (orderIndex === -1) return null

    const deletedOrder = orders.splice(orderIndex, 1)[0]
    this.fileManager.write(orders)
    return deletedOrder
  }
}
