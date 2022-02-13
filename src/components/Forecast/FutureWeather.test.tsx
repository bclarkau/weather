import { render } from '@testing-library/react'

import { WeatherForecast } from '../../api/forecast'
import FutureWeather from './FutureWeather'

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

it('renders forecast', () => {
	const { getByText } = render(<FutureWeather {...exampleForecast.forecast[0]} />)
	expect(getByText('Wed, 26 Aug')).toBeInTheDocument()
	expect(getByText('clear sky')).toBeInTheDocument()
})