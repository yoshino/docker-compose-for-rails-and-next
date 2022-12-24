import Button from '../../components/atoms/Button'
import { render } from '@testing-library/react'

describe('render Button component', () => {
  test('should first', () => {
    const { getByText } = render(<Button>Click!</Button>)
    expect(getByText('Click!')).toBeTruthy()
  })
})
