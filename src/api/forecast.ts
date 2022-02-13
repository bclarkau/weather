import { Location } from './location'

export type Weather = {
	date: number
	temperature: {
		now: number
		feel: number
		min?: number
		max?: number
	}
	sunrise: number
	sunset: number
	description: string
	icon: string
}

export type WeatherForecast = {
	current: Weather
	forecast: Weather[]
}

// get forecast using openweathermap.org forecast api
export const getForecast = async (location: Location): Promise<WeatherForecast> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coord.lat}&lon=${location.coord.lon}&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapForecast(data)
}

export const mapForecast = (forecast: any): WeatherForecast => {
	const days = forecast.daily.slice(1, 6) // next 5 days only
	console.log({forecast})
	return {
		current: mapCurrent(forecast.current),
		forecast: days.map(mapWeather)
	}
}

const mapCurrent = (weather: any): Weather => ({
	date: weather.dt,
	temperature: {
		now: weather.temp,
		feel: weather.feels_like
	},
	sunrise: weather.sunrise,
	sunset: weather.sunset,
	description: weather.weather[0].description,
	icon: weather.weather[0].icon
})

const mapWeather = (weather: any): Weather => ({
	date: weather.dt,
	temperature: {
		now: weather.temp.day,
		feel: weather.feels_like.day,
		min: weather.temp.min,
		max: weather.temp.max
	},
	sunrise: weather.sunrise,
	sunset: weather.sunset,
	description: weather.weather[0].description,
	icon: weather.weather[0].icon
})

export const getWeatherImageSrc = (icon: string): string => `https://openweathermap.org/img/wn/${icon}@4x.png`
