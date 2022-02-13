import { debounce } from "ts-debounce"

export type Location = {
	id: number
	name: string
	country: string
	coord: {
		lat: number
		lon: number
	}
}

// get list of locations matching string using openweathermap.org geocoding api
export const getLocations = async (query: string): Promise<Location[]> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&type=like&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return mapLocations(data.list)
}

// get list of locations after user has stopped typing for 500ms
export const getDebouncedLocations = debounce(getLocations, 500)

const mapLocations = (locations: any): Location[] => locations.map(mapLocation)

const mapLocation = (location: any): Location => ({
	id: location.id,
	name: location.name,
	country: location.sys.country,
	coord: {
		lat: location.coord.lat,
		lon: location.coord.lon
	}
})