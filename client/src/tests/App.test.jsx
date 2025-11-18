import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders home text', () => {
  render(<App />)
  expect(screen.getByText(/MERN Capstone/i)).toBeInTheDocument()
})
