import { render } from '@testing-library/react'

import Loading from '.'

test('renders loading image with active class when active', () => {
  const { container } = render(<Loading active={true} />)
  const loadingDiv = container.getElementsByClassName('loading')
  expect(loadingDiv.length).toBe(1)
  expect(loadingDiv[0]).toHaveClass('active')
})

test('renders loading image without active class when inactive', () => {
  const { container } = render(<Loading active={false} />)
  const loadingDiv = container.getElementsByClassName('loading')
  expect(loadingDiv.length).toBe(1)
  expect(loadingDiv[0]).not.toHaveClass('active')
})