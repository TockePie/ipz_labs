import { WeatherData } from '../weatherData'
import WeatherStation from './WeatherStation'

class WeatherProxy {
  private weatherStation: WeatherStation

  constructor(weatherStation: WeatherStation) {
    this.weatherStation = weatherStation
  }

  getWeatherData(userRole: string): WeatherData | null {
    if (userRole === 'admin') {
      return this.weatherStation.getWeatherData()
    } else {
      console.log('Доступ обмежено: Ви не адміністратор.')
      return null
    }
  }
}

export default WeatherProxy
