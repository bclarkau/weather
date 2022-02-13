import { render, screen } from '@testing-library/react'

import LocationSelect from '.'

test('renders input span field', () => {
  render(<LocationSelect onSelect={() => {}} />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('ul is empty when no locations', () => {
  render(<LocationSelect onSelect={() => {}} />)
  expect(screen.queryByRole('list')).toBeEmptyDOMElement()
})

