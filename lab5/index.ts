/**
 * Інтерфейс для комірки ігрового поля.
 */
interface Cell {
  /**
   * Повертає стан комірки.
   */
  getState(): string
  /**
   * Змінює стан комірки.
   * @param state Новий стан комірки.
   */
  setState(state: string): void
}

/**
 * Інтерфейс для простору.
 */
interface Space {
  /**
   * Інтерфейс для простору.
   */
  addCell(cell: Cell): void
  /**
   * Видаляє комірку з простору.
   * @param cell Комірка для видалення.
   */
  removeCell(cell: Cell): void
  /**
   * Змінює стан комірки в просторі.
   * @param cell Комірка для зміни стану.
   * @param state Новий стан комірки.
   */
  updateCellState(cell: Cell, state: string): void
  /**
   * Повідомляє про зміни в просторі.
   */
  notifyChanges(): void
}

/**
 * Клас комірки ігрового поля.
 */
class GameCell implements Cell {
  /**
   * Стан комірки.
   */
  private state: string

  /**
   * Конструктор класу.
   * @param initialState Початковий стан комірки.
   */
  constructor(initialState: string = 'empty') {
    this.state = initialState
  }

  /**
   * Повертає стан комірки.
   */
  getState(): string {
    return this.state
  }

  /**
   * Змінює стан комірки.
   * @param state Новий стан комірки.
   */
  setState(state: string): void {
    console.log(`Метод setState з параметром state=${state}`)
    this.state = state
  }
}

/**
 * Клас простору.
 */
class GameSpace implements Space {
  /**
   * Масив комірок.
   */
  private cells: Cell[]

  /**
   * Конструктор класу.
   */
  constructor() {
    this.cells = []
  }

  /**
   * Додає комірку до простору.
   * @param cell Комірка для додавання.
   */
  addCell(cell: Cell): void {
    console.log(`Метод addCell з параметром cell=${cell.getState()}`)
    this.cells.push(cell)
  }

  /**
   * Видаляє комірку з простору.
   * @param cell Комірка для видалення.
   */
  removeCell(cell: Cell): void {
    console.log(`Метод removeCell з параметром cell=${cell.getState()}`)
    const index = this.cells.indexOf(cell)
    index !== -1 && this.cells.splice(index, 1)
  }

  /**
   * Змінює стан комірки в просторі.
   * @param cell Комірка для зміни стану.
   * @param state Новий стан комірки.
   */
  updateCellState(cell: Cell, state: string): void {
    console.log(`Метод updateCellState з параметрами cell=${cell.getState()} state=${state}`)
    cell.setState(state)
  }

  /**
   * Повідомляє про зміни в просторі.
   */
  notifyChanges(): void {
    this.cells.forEach((cell, index) => {
      console.log(`Стан комірки ${index}: ${cell.getState()}`)
    })
  }
}

const mediator = new GameSpace()
const cell1 = new GameCell()
const cell2 = new GameCell('obstacle')

mediator.addCell(cell1)
mediator.addCell(cell2)

mediator.updateCellState(cell1, 'player')
mediator.updateCellState(cell2, 'empty')
mediator.notifyChanges()
