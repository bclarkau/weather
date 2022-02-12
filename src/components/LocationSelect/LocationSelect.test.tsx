import React from 'react'
import { render, screen } from '@testing-library/react'

import LocationSelect from '.'

test('renders location select input field', () => {
  const { container } = render(<LocationSelect onSelect={() => {}} />)
  expect(container.getElementsByTagName('input').length).toBe(1)
})