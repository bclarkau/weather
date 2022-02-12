import { render } from '@testing-library/react'

import Forecast from '.'
import { Location } from '../../api/location'

const testLocation: Location = {
	id: 2147714,
	name: 'Sydney',
	coord: {
		lat: -33.8679,
		lon: 151.2073
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