import { Location } from './location'

export type Weather = {
	date: number
	temperature: {
		now: number
		feel: number
		min: number
		max: number
	}
	description: string
	icon: string
}

export type WeatherForecast = Weather[]

// get forecast using openweathermap.org forecast api
export const getForecast = async (location: Location, days: number = 5): Promise<WeatherForecast> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coord.lat}&lon=${location.coord.lon}&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapForecast(data)
}

const mapForecast = (forecast: any): WeatherForecast => {
	const days = forecast.daily.slice(1, 6) // next 5 days only 
	return days.map(mapWeather)
}

const mapWeather = (weather: any): Weather => ({
	date: weather.dt,
	temperature: {
		now: weather.temp.day,
		feel: weather.feels_like.day,
		min: weather.temp.min,
		max: weather.temp.max
	},
	description: weather.weather[0].description,
	icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
})