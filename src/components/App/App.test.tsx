import { render } from '@testing-library/react'

import App from './'

test('renders container div', () => {
	const { container } = render(<App />)
    expect(container.getElementsByClassName('container').length).toBe(1)
})