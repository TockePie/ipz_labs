/**
 * Інтерфейс для представлення координат у двовимірному просторі.
 */
interface Coordinates {
  x: number
  y: number
}

/**
 * Інтерфейс для представлення ігрового простору.
 */
interface GameSpace {
  /**
   * Додає фішку до ігрового просторі.
   * @param figure Фішка, яку потрібно додати.
   */
  addFigure(figure: Figure): void
  /**
   * Видаляє фішку з ігрового простору.
   * @param figure Фішка, яку потрібно видалити.
   */
  removeFigure(figure: Figure): void
}

/**
 * Інтерфейс для представлення фішки у грі.
 */
interface Figure {
  name: string
  /**
   * Переміщує фішку до вказаних координат.
   * @param coordinates Координати, до яких потрібно перемістити фішку.
   */
  move({ x, y }: Coordinates): void
}

/**
 * Інтерфейс для представлення майстра гри.
 */
interface GameMaster {
  /**
   * Створює ігровий простір.
   * @returns Ігровий простір.
   */
  createGameSpace(): GameSpace
  /**
   * Створює фішку на вказаних координатах з вказаною назвою.
   * @param coordinates Координати, на яких потрібно створити фішку.
   * @param name Назва фішки.
   * @returns Фішка.
   */
  createFigure({ x, y }: Coordinates, name: string): Figure
}

/**
 * Реалізація інтерфейсу GameSpace.
 */
class GameSpaceImpl implements GameSpace {
  private figures: Figure[]

  constructor() {
    this.figures = []
  }

  /**
   * Додає фішку до ігрового простору.
   * @param figure Фішка, яку потрібно додати.
   */
  addFigure(figure: Figure): void {
    console.log(`Додано фішку ${figure.name} до ігрового простору`)
    this.figures.push(figure)
  }

  /**
   * Видаляє фішку з ігрового простору.
   * @param figure Фішка, яку потрібно видалити.
   */
  removeFigure(figure: Figure): void {
    console.log(`Видалено фішку ${figure.name} з ігрового простору`)
    const index = this.figures.indexOf(figure)
    if (index !== -1) {
      this.figures.splice(index, 1)
    }
  }
}

/**
 * Реалізація інтерфейсу Figure.
 */
class FigureImpl implements Figure {
  private x: number
  private y: number
  public name: string

  /**
   * Створює нову фішку на вказаних координатах з вказаною назвою.
   * @param coordinates Координати, на яких потрібно створити фішку.
   * @param name Назва фішки.
   */
  constructor({ x, y }: Coordinates, name: string) {
    this.x = x
    this.y = y
    this.name = name
  }

  /**
   * Переміщує фішку до вказаних координат.
   * @param coordinates Координати, до яких потрібно перемістити фішку.
   */
  move({ x, y }: Coordinates): void {
    console.log(`Фішка ${this.name} переміщена з (${this.x}, ${this.y}) до (${x}, ${y})`)
    this.x = x
    this.y = y
  }
}

/**
 * Реалізація інтерфейсу GameMaster.
 */
class GameMasterImpl implements GameMaster {
  /**
   * Єдиний екземпляр майстра гри.
   */
  private static instance: GameMasterImpl
  /**
   * Ігровий простір.
   */
  private gameSpace: GameSpace

  /**
   * Створює новий майстер гри.
   * @private
   */
  private constructor() {
    this.gameSpace = new GameSpaceImpl()
  }

  /**
   * Повертає єдиний екземпляр майстра гри.
   * @returns Єдиний екземпляр майстра гри.
   */
  public static getInstance(): GameMasterImpl {
    if (!GameMasterImpl.instance) {
      GameMasterImpl.instance = new GameMasterImpl()
    }
    return GameMasterImpl.instance
  }

  /**
   * Створює ігровий простір.
   * @returns Ігровий простір.
   */
  createGameSpace(): GameSpace {
    console.log(`Створено ігровий простір`)
    return this.gameSpace
  }

  /**
   * Створює фішку на вказаних координатах з вказаною назвою.
   * @param coordinates Координати, на яких потрібно створити фішку.
   * @param name Назва фішки.
   * @returns Фішка.
   */
  createFigure({ x, y }: Coordinates, name: string): Figure {
    console.log(`Створено фішку ${name} на позиції (${x}, ${y})`)
    return new FigureImpl({ x, y }, name)
  }
}

// Використання розпорядника гри
const gameMaster = GameMasterImpl.getInstance()
const gameSpace = gameMaster.createGameSpace()

const figure = gameMaster.createFigure(
  {
    x: 10,
    y: 20
  },
  'My Figure'
)

gameSpace.addFigure(figure)

figure.move({ x: 30, y: 40 })

gameSpace.removeFigure(figure)
