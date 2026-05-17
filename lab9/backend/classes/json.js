import { existsSync, readFileSync, writeFileSync } from 'node:fs'

/**
 * Class to manage reading and writing JSON files.
 */
export class JSONFileManager {
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
    if (existsSync(this.filePath)) {
      const data = readFileSync(this.filePath, 'utf-8')
      return JSON.parse(data || '[]')
    }
    return []
  }

  /**
   * Writes data to the JSON file.
   * @param {Array|Object} data - The data to write to the file.
   */
  write(data) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8')
  }
}
