import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import AppBar from './AppBar'
import React from 'react'

describe('App Component', () => {
  test('Renders properly', () => expect(renderer.create(
    <BrowserRouter>
      <AppBar/>
    </BrowserRouter>
  ).toJSON()).toMatchSnapshot())
})
