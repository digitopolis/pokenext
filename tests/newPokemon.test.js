/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import NewPokemon from '../components/newPokemon'

describe('new pokemon form', () => {
  it('renders form', () => {
    const { getByText } = render(<NewPokemon />)
    expect(getByText('This should fail!')).toBeInTheDocument()
  })
})