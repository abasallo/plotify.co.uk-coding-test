import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import Phases from './Phases'
import React from 'react'

describe('Phases Component', () => {
  test('Renders properly', () => expect(renderer.create(
      <BrowserRouter>
        <Phases companyId={'1'} />
      </BrowserRouter>
  ).toJSON()).toMatchSnapshot())
})
