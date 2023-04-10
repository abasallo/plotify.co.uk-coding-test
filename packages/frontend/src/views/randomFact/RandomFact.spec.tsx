import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import RandomFact from './RandomFact'
import React from 'react'

describe('Random Facts View', () => {
  test('Renders properly', () => {
    expect(renderer.create(
      <BrowserRouter>
        <RandomFact />
      </BrowserRouter>
    ).toJSON()).toMatchSnapshot()
  })
})
