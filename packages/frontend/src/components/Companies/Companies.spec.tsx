import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import Companies from './Companies'

describe('Companies Component', () => {
  test('Renders properly', async () => expect(renderer.create(
    <BrowserRouter>
      <Companies />
    </BrowserRouter>
  ).toJSON()).toMatchSnapshot())
})
