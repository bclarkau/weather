import { render } from '@testing-library/react'

import Forecast from '.'
import { Location } from '../../api/location'

const testLocation: Location = {
	id: 2147714,
	name: 'Sydney',
	country: 'AU',
	coord: {
		lat: -33.8679,
		lon: 151.2073
	},
	weather: {
		date: 1644707344,
		temperature: {
			now: 21,
			feel: 20,
			min: 18,
			max: 24
		},
		icon: 'https://openweathermap.org/img/w/03d.png',
		description: 'scattered clouds'
	}
}

test('forecast div is not visible when no location passed', () => {
	const { container } = render(<Forecast location={null} />)
	const forecastDiv = container.getElementsByClassName('forecast')
	expect(forecastDiv).toBeTruthy()
    expect(forecastDiv.length).toBe(1)
	expect(forecastDiv[0]).toHaveClass('hidden')
})

test('forecast div is visible when location passed', () => {
	
	const { container } = render(<Forecast location={testLocation} />)
	const forecastDiv = container.getElementsByClassName('forecast')
	expect(forecastDiv).toBeTruthy()
    expect(forecastDiv.length).toBe(1)
	expect(forecastDiv[0]).not.toHaveClass('hidden')
})