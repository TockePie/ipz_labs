/**
 * Interface representing an image with a method to get color at specific coordinates.
 */
interface Image {
  /**
   * Gets the color at the specified coordinates.
   * @param {Coordinates} coordinates - The coordinates to get the color from.
   * @returns {string} The color at the specified coordinates.
   */
  getColor({ x, y }: Coordinates): string
}

/**
 * Interface representing coordinates with x and y values.
 */
interface Coordinates {
  x: number
  y: number
}

/**
 * Interface representing numbered coordinates with x1, x2, y1, and y2 values.
 */
interface NumberedCoordinates {
  x1: number
  x2: number
  y1: number
  y2: number
}

/**
 * Class representing a real image.
 * Implements the Image interface.
 */
class RealImage implements Image {
  /**
   * Gets the color at the specified coordinates.
   * @param {Coordinates} coordinates - The coordinates to get the color from.
   * @returns {string} The color at the specified coordinates.
   */
  getColor({ x, y }: Coordinates): string {
    console.log(`Метод getColor з параметрами x=${x}, y=${y}`)
    return `#000000` // Повертаємо чорний колір як заглушку
  }
}

/**
 * Class representing an image proxy.
 * Implements the Image interface.
 */
class ImageProxy implements Image {
  private realImage: RealImage
  private x1: number
  private x2: number
  private y1: number
  private y2: number

  /**
   * Creates an instance of ImageProxy.
   * @param {NumberedCoordinates} coordinates - The coordinates defining the allowed area.
   */
  constructor({ x1, x2, y1, y2 }: NumberedCoordinates) {
    this.realImage = new RealImage()
    this.x1 = x1
    this.x2 = x2
    this.y1 = y1
    this.y2 = y2
  }

  /**
   * Gets the color at the specified coordinates.
   * If the coordinates are within the allowed area, it delegates to the real image.
   * Otherwise, it returns an access denied message.
   * @param {Coordinates} coordinates - The coordinates to get the color from.
   * @returns {string} The color at the specified coordinates or an access denied message.
   */
  getColor({ x, y }: Coordinates): string {
    if (x > this.x1 && x < this.x2 && y > this.y1 && y < this.y2) {
      return this.realImage.getColor({ x, y })
    } else {
      console.log(`Координати (${x}, ${y}) поза межами дозволених.`)
      return `Немає доступу до цієї точки.`
    }
  }
}

const imageProxy = new ImageProxy({ x1: 10, x2: 50, y1: 10, y2: 50 })

console.log(imageProxy.getColor({ x: 20, y: 20 })) // В межах дозволеного доступу
console.log(imageProxy.getColor({ x: 5, y: 5 })) // Поза межами
