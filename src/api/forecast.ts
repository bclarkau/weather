import { Location } from "./location"

export type Weather = {
	date: number
	temp: number
	weather: {
		status: string
		description: string
	}
}

export type WeatherForecast = Weather[]

// get forecast using openweathermap.org forecast api
export const getForecast = async (location: Location, days: number = 5): Promise<WeatherForecast> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coord.lat}&lon=${location.coord.lon}&cnt=${days}&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapForecast(data)
}

const mapForecast = (forecast: any): WeatherForecast => {
	return forecast.list.map((item: any) => {
		return {
			date: item.dt,
			temp: item.main.temp,
			weather: {
				status: item.weather[0].main,
				description: item.weather[0].description
			}
		}
	})
}
