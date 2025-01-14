/**
 * Інтерфейс для вузлів виразу. Забезпечує методи для оцінки значення та конвертації в рядок.
 */
interface ExpressionNode {
  /**
   * Оцінює значення вузла виразу.
   * @returns Числове значення.
   */
  evaluate(): number

  /**
   * Перетворює вузол виразу в рядкове представлення.
   * @returns Рядок, що представляє вираз.
   */
  toString(): string
}

/**
 * Інтерфейс для зберігання операторів та їх логіки виконання.
 */
interface OperatorsProps {
  [key: string]: (a: number, b: number) => number
}

/**
 * Клас для представлення числового вузла в дереві виразу.
 */
class NumberNode implements ExpressionNode {
  private value: number

  /**
   * Створює новий числовий вузол.
   * @param value Числове значення.
   */
  constructor(value: number) {
    this.value = value
  }

  /**
   * Оцінює значення числового вузла.
   * @returns Числове значення вузла.
   */
  evaluate(): number {
    console.log(`Метод evaluate викликаний для NumberNode зі значенням ${this.value}`)
    return this.value
  }

  /**
   * Повертає рядкове представлення числового вузла.
   * @returns Рядок з числовим значенням.
   */
  toString(): string {
    return this.value.toString()
  }
}

/**
 * Клас для представлення вузла оператора в дереві виразу.
 */
class OperatorNode implements ExpressionNode {
  private operator: string
  private left: ExpressionNode
  private right: ExpressionNode

  /**
   * Статичне поле для зберігання доступних операторів і їх логіки.
   */
  private static operators: OperatorsProps = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
      if (b === 0) throw new Error('Division by zero!')
      return a / b
    }
  }

  /**
   * Створює новий вузол оператора.
   * @param operator Оператор ('+', '-', '*', '/').
   * @param left Лівий дочірній вузол.
   * @param right Правий дочірній вузол.
   */
  constructor(operator: string, left: ExpressionNode, right: ExpressionNode) {
    this.operator = operator
    this.left = left
    this.right = right
  }

  /**
   * Оцінює значення вузла оператора шляхом виконання операції.
   * @returns Числове значення результату операції.
   */
  evaluate(): number {
    const leftValue = this.left.evaluate()
    const rightValue = this.right.evaluate()

    console.log(`Метод evaluate викликаний для OperatorNode зі значенням ${this.operator}`)

    return OperatorNode.operators[this.operator](leftValue, rightValue)
  }

  /**
   * Повертає рядкове представлення вузла оператора.
   * @returns Рядок, що представляє вираз з оператором.
   */
  toString(): string {
    return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`
  }
}

const node1 = new NumberNode(3)
const node2 = new NumberNode(4)
const addition = new OperatorNode('+', node1, node2)

console.log(`Вираз: ${addition.toString()}`)
console.log(`Результат: ${addition.evaluate()}`)
