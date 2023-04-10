import { getPhases } from './phase'

import { Phase } from 'plotify.co.uk-coding-test-shared'

import { GET_PHASES } from './graphql/queries/phaseQueries'

import { apolloClient } from './graphql/apolloClient'

jest.mock('./graphql/apolloClient')

describe('Phase Service', () => {
  test('getPhases', async () => {
    apolloClient.query = jest.fn().mockReturnValueOnce({ data: { getPhases: [{ id: '1', name: 'name' }] } })
    const result: Phase[] = await getPhases('1')
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: GET_PHASES,
      variables: { companyId: '1' }
    })
    if (result) {
      expect(result[0].name).toEqual('name')
    }
  })
})
