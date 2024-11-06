/**
 * Інтерфейс для координат.
 * @interface
 */
interface Coordinates {
  /** Координата по осі X */
  x: number
  /** Координата по осі Y */
  y: number
}

/**
 * Інтерфейс для іконки.
 * @interface
 */
interface Icon {
  /**
   * Метод для малювання іконки.
   * @param {Coordinates} coordinates - Координати, де потрібно намалювати іконку.
   */
  draw({ x, y }: Coordinates): void
}

/**
 * Інтерфейс для Flyweight.
 * @interface
 */
interface Flyweight {
  /**
   * Метод для малювання Flyweight.
   * @param {Coordinates} coordinates - Координати, де потрібно намалювати Flyweight.
   */
  draw({ x, y }: Coordinates): void
}

/**
 * Реалізація іконки.
 * @class
 * @implements {Icon}
 */
class IconImpl implements Icon {
  private type: string

  /**
   * Створює нову іконку.
   * @param {string} type - Тип іконки.
   */
  constructor(type: string) {
    this.type = type
  }

  /**
   * Малює іконку за заданими координатами.
   * @param {Coordinates} coordinates - Координати для малювання.
   */
  draw({ x, y }: Coordinates): void {
    console.log(`Метод draw з параметрами x=${x} y=${y} для іконки типу ${this.type}`)
  }
}

/**
 * Фабрика для створення іконок.
 * @class
 */
class IconFactory {
  private icons: { [key: string]: Flyweight }

  /**
   * Створює нову фабрику іконок.
   */
  constructor() {
    this.icons = {}
  }

  /**
   * Отримує іконку за типом, створюючи її, якщо вона ще не існує.
   * @param {string} type - Тип іконки.
   * @returns {Flyweight} - Іконка.
   */
  getIcon(type: string): Flyweight {
    if (!this.icons[type]) {
      this.icons[type] = new IconImpl(type)
    }
    return this.icons[type]
  }
}

/**
 * Іконка файлу.
 * @class
 * @implements {Icon}
 */
class FileIcon implements Icon {
  private icon: Flyweight

  /**
   * Створює нову іконку файлу.
   * @param {string} type - Тип іконки.
   * @param {IconFactory} factory - Фабрика для отримання іконок.
   */
  constructor(type: string, factory: IconFactory) {
    this.icon = factory.getIcon(type)
  }

  /**
   * Малює іконку файлу за заданими координатами.
   * @param {Coordinates} coordinates - Координати для малювання.
   */
  draw({ x, y }: Coordinates): void {
    this.icon.draw({ x, y })
  }
}

/**
 * Іконка директорії.
 * @class
 * @implements {Icon}
 */
class DirectoryIcon implements Icon {
  private icons: Flyweight[]

  /**
   * Створює нову іконку директорії.
   * @param {string[]} types - Типи іконок.
   * @param {IconFactory} factory - Фабрика для отримання іконок.
   */
  constructor(types: string[], factory: IconFactory) {
    this.icons = types.map((type) => factory.getIcon(type))
  }

  /**
   * Малює іконки директорії за заданими координатами.
   * @param {Coordinates} coordinates - Координати для малювання.
   */
  draw({ x, y }: Coordinates): void {
    this.icons.forEach((icon) => icon.draw({ x, y }))
  }
}

const factory = new IconFactory()

const fileIcon = new FileIcon('file', factory)
fileIcon.draw({ x: 10, y: 20 })

const directoryIcon = new DirectoryIcon(['file', 'directory'], factory)
directoryIcon.draw({ x: 30, y: 40 })
