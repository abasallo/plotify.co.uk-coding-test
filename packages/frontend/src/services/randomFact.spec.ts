import axios from 'axios'

import { fetchRandomFact } from './randomFact'

jest.mock('axios')

describe('Random Fact Service', () => {
  test('fetchRandomFact', async () => {
    axios.get = jest.fn().mockReturnValueOnce(Promise.resolve({ status: 200, data: { text: 'text' } }))
    const result = await fetchRandomFact()
    expect(result).toEqual('text')
  })
})
