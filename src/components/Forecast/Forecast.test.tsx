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
	}
}

test('forecast div is not visible when no location passed', () => {
	const { container } = render(<Forecast location={null} />)
	const forecastDiv = container.getElementsByClassName('forecast')
	expect(forecastDiv).toBeTruthy()
    expect(forecastDiv.length).toBe(1)
	expect(forecastDiv[0]).not.toHaveClass('active')
})

test('forecast div is visible when location passed', () => {
	const { container } = render(<Forecast location={testLocation} />)
	const forecastDiv = container.getElementsByClassName('forecast')
	expect(forecastDiv).toBeTruthy()
    expect(forecastDiv.length).toBe(1)
	expect(forecastDiv[0]).toHaveClass('active')
})

test('forecast columns should show headings', () => {
	const { container } = render(<Forecast location={testLocation} />)
	const headings = container.getElementsByTagName('h2')
	expect(headings).toBeTruthy()
	expect(headings.length).toBe(2)
	expect(headings[0]).toHaveTextContent('Currently')
	expect(headings[1]).toHaveTextContent('Forecast')
})