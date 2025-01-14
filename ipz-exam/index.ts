import WeatherIterator from './classes/WeatherIterator'
import WeatherProxy from './classes/WeatherProxy'
import WeatherStation from './classes/WeatherStation'
import Client from './classes/WeatherObserver'

const weatherStation = WeatherStation.getInstance()
const proxy = new WeatherProxy(weatherStation)
const iterator = new WeatherIterator()

const client1 = new Client('Клієнт 1')
const client2 = new Client('Клієнт 2')

weatherStation.addObserver(client1)
weatherStation.addObserver(client2)

weatherStation.setWeatherData({ temperature: 25, humidity: 60, pressure: 756 })
iterator.addWeatherData(weatherStation.getWeatherData())

weatherStation.setWeatherData({ temperature: 30, humidity: 55, pressure: 763 })
iterator.addWeatherData(weatherStation.getWeatherData())

console.log(proxy.getWeatherData('admin')) // Адміністратор отримує доступ
console.log(proxy.getWeatherData('user')) // Користувач отримує відмову

console.log(iterator.getNext()) // Ітерація по історії погоди
console.log(iterator.getNext())
