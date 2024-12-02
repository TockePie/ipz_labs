const fs = require('fs')

/**
 * Class to manage reading and writing JSON files.
 */
class JSONFileManager {
  /**
   * @param {string} filePath - The path to the JSON file.
   */
  constructor(filePath) {
    this.filePath = filePath
  }

  /**
   * Reads the JSON file and returns its content.
   * @returns {Array|Object} The content of the JSON file.
   */
  read() {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf-8')
      return JSON.parse(data || '[]')
    }
    return []
  }

  /**
   * Writes data to the JSON file.
   * @param {Array|Object} data - The data to write to the file.
   */
  write(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8')
  }
}

/**
 * Class to manage menu items using a JSON file.
 */
class MenuManager {
  /**
   * @param {string} filePath - The path to the JSON file.
   */
  constructor(filePath) {
    this.fileManager = new JSONFileManager(filePath)
  }

  /**
   * Retrieves all menu items.
   * @returns {Array} The list of menu items.
   */
  getAllMenuItems() {
    return this.fileManager.read()
  }

  getMenuItemById(menuItemId) {
    const menu = this.fileManager.read()
    return menu.find((m) => m.id === menuItemId)
  }

  /**
   * Adds a new menu item.
   * @param {Object} newMenuItem - The new menu item to add.
   * @returns {Object} The added menu item with an assigned ID.
   */
  addMenuItem(newMenuItem) {
    const menu = this.fileManager.read()
    newMenuItem.id = `menu-item-${Date.now()}`
    menu.push(newMenuItem)
    this.fileManager.write(menu)
    return newMenuItem
  }
}

/**
 * Class to manage orders using a JSON file.
 */
class OrderManager {
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

module.exports = { MenuManager, OrderManager }
