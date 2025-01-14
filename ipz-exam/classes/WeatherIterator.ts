import { WeatherData } from '../weatherData'

class WeatherIterator {
  private weatherHistory: WeatherData[] = []
  private currentIndex = 0

  addWeatherData(data: WeatherData) {
    this.weatherHistory.push(data)
  }

  getNext(): WeatherData | null {
    if (this.currentIndex < this.weatherHistory.length) {
      return this.weatherHistory[this.currentIndex++]
    } else {
      this.currentIndex = 0
      return null
    }
  }
}

export default WeatherIterator
