import { WeatherData } from '../weatherData'
import { WeatherObserver } from './WeatherObserver'

class WeatherStation {
  private static instance: WeatherStation
  private weatherData: WeatherData
  private observers: WeatherObserver[] = []

  private constructor() {
    this.weatherData = { temperature: 0, humidity: 0, pressure: 0 }
  }

  static getInstance(): WeatherStation {
    if (!WeatherStation.instance) {
      WeatherStation.instance = new WeatherStation()
    }
    return WeatherStation.instance
  }

  setWeatherData(data: WeatherData) {
    this.weatherData = data
    this.notifyObservers()
  }

  getWeatherData() {
    return this.weatherData
  }

  addObserver(observer: WeatherObserver) {
    this.observers.push(observer)
  }

  removeObserver(observer: WeatherObserver) {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  private notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.weatherData)
    }
  }
}

export default WeatherStation
