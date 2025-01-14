import { WeatherData } from '../weatherData'

interface WeatherObserver {
  update(data: WeatherData): void
}

class Client implements WeatherObserver {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  update(data: WeatherData) {
    console.log(
      `${this.name} отримав оновлення погоди: Температура = ${data.temperature}, Вологість = ${data.humidity}, Тиск = ${data.pressure}`
    )
  }
}

export { WeatherObserver }
export default Client
