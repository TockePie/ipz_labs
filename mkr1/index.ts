interface Message {
  getText(): string
}

// Класи

class BaseMessage implements Message {
  private text: string

  constructor(text: string) {
    this.text = text
  }

  getText(): string {
    return this.text
  }
}

abstract class MessageDecorator implements Message {
  protected message: Message

  constructor(message: Message) {
    this.message = message
  }

  abstract getText(): string
}

// Декоратори

// Крок 1
class EncryptionDecorator extends MessageDecorator {
  getText(): string {
    const encryptedText = this.message
      .getText()
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
      .join('')
    return encryptedText
  }
}

// Крок 2
class CompressionDecorator extends MessageDecorator {
  getText(): string {
    return this.message.getText().replace(/\s+/g, ' ').trim()
  }
}

// Крок 3
class TimestampDecorator extends MessageDecorator {
  getText(): string {
    const dateTime = new Date().toISOString()
    return `[${dateTime}] ${this.message.getText()}`
  }
}

// Крок 4
class AuthorDecorator extends MessageDecorator {
  getText(): string {
    const author = 'Maxim Kradozhon'
    return `${this.message.getText()} - ${author}`
  }
}

// Результати

let message: Message = new BaseMessage('  Вітаю, це звичайне    повідомлення-зразок!  ')

console.log(`Оригінал: ${message.getText()}`)

message = new CompressionDecorator(message)
console.log(`Стиснення: ${message.getText()}`)

message = new EncryptionDecorator(message)
console.log(`Шифрування: ${message.getText()}`)

message = new TimestampDecorator(message)
console.log(`Відмітка дати: ${message.getText()}`)

message = new AuthorDecorator(message)
console.log(`Автор: ${message.getText()}`)
