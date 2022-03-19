import { render, screen } from '@testing-library/react'

import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('Header component', () => {
  it('renders correctly', () => {
  const { getByText } = render(
      <Header />
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })

})