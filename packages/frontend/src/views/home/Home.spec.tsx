import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Home from './Home'
import React from 'react'

describe('Home View', () => {
  test('Renders properly', () => {
    expect(renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    ).toJSON()).toMatchSnapshot()
  })
})
