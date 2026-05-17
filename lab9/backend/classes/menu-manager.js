import { JSONFileManager } from './json.js'

/**
 * Class to manage menu items using a JSON file.
 */
export class MenuManager {
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
