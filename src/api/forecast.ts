import { Location } from './location'

export type WeatherReading = {
	time: number
	temperature: number
	icon: string
	description: string
}

export type Weather = {
	date: number
	hours: WeatherReading[]
}

export type WeatherForecast = Weather[]

// get forecast using openweathermap.org forecast api
export const getForecast = async (location: Location, days: number = 5): Promise<WeatherForecast> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coord.lat}&lon=${location.coord.lon}&units=metric&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapForecast(data)
}

// map forecast data, grouped by date
const mapForecast = (data: any): WeatherForecast => {
	const list = data.list
	const dates = list.reduce((acc: any, curr: any) => {
		const date = new Date(curr.dt * 1000).getDate()

		// ignore if date matches current date 
		if (date === new Date().getDate()) {
			return acc
		}

		if (!acc[date]) {
			acc[date] = []
		}
		acc[date].push(curr)
		return acc
	}, {})
	return Object.keys(dates).map((date: string) => ({
		date: dates[date][0].dt,
		hours: dates[date].map((hour: any) => ({
			time: hour.dt,
			temperature: hour.main.temp,
			icon: `https://openweathermap.org/img/w/${hour.weather[0].icon}.png`,
			description: hour.weather[0].description
		}))
	}))
}
