import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import Main from './Main'
import React from 'react'

describe('Main View', () => {
  test('Renders properly', () => {
    expect(renderer.create(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    ).toJSON()).toMatchSnapshot()
  })
})
