import { render } from '@testing-library/react'

import { WeatherForecast } from '../../api/forecast'
import CurrentWeather from './CurrentWeather'

const exampleForecast: WeatherForecast = {
	current: {
		date: 1598420000,
		temperature: {
			now: 15,
			feel: 15,
			min: 15,
			max: 15
		},
		sunrise: 1598420000,
		sunset: 1598420000,
		description: 'clear sky',
		icon: '01d'
	},
	forecast: [
		{
			date: 1598420000,
			temperature: {
				now: 15,
				feel: 15,
				min: 15,
				max: 15
			},
			sunrise: 1598420000,
			sunset: 1598420000,
			description: 'clear sky',
			icon: '01d'
		}
	]
}

it('renders current weather', () => {
	const { getByText } = render(<CurrentWeather {...exampleForecast.current} />)
	expect(getByText('Wednesday, 26 August')).toBeInTheDocument()
	expect(getByText('clear sky')).toBeInTheDocument()
})