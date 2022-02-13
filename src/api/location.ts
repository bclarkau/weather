import { debounce } from "ts-debounce"
import { Weather } from "./forecast"

export type Location = {
	id: number
	name: string
	country: string
	coord: {
		lat: number
		lon: number
	},
	weather: Weather
}

// get list of locations matching string using openweathermap.org geocoding api
export const getLocations = async (query: string): Promise<Location[]> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&type=like&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapLocations(data.list)
}

// get list of locations after user has stopped typing for 500ms
export const getDebouncedLocations = debounce(getLocations, 500)

// get latitude/longitude using openweathermap.org geolocation api 
export const getLatLng = async (city: string) : Promise<Location> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapLocation(data)
}

const mapLocations = (locations: any): Location[] => locations.map(mapLocation)

const mapLocation = (location: any): Location => ({
	id: location.id,
	name: location.name,
	country: location.sys.country,
	coord: {
		lat: location.coord.lat,
		lon: location.coord.lon
	},
	weather: {
		date: location.dt,
		temperature: {
			now: location.main.temp,
			feel: location.main.feels_like,
			min: location.main.temp_min,
			max: location.main.temp_max
		},
		description: location.weather[0].description,
		icon: `https://openweathermap.org/img/wn/${location.weather[0].icon}@4x.png`
	}
})