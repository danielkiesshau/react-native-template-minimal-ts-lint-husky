import React from 'react'
import { render } from '@testing-library/react-native'
import App from 'presentation/App'

test('(Integration) Renders Step One', () => {
  const { getByText } = render(<App />)

  const FirstStep = getByText('Step One')

  expect(FirstStep).toBeDefined()
})
