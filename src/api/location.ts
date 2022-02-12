export type Location = {
	id: number
	name: string
	coord: {
		lat: number
		lon: number
	}
}

// get list of locations matching string using openweathermap.org geocoding api
export const getLocations = async (query: string): Promise<Location[]> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return data.list
}

// get latitude/longitude using openweathermap.org geolocation api 
export const getLatLng = async (city: string) : Promise<Location> => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}`)
	const data = await response.json()
	return {
		id: data.id,
		name: data.name,
		coord: data.coord
	}
}
