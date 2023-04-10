import { getCompanies } from './company'

import { Company } from 'plotify.co.uk-coding-test-shared'

import { GET_COMPANIES } from './graphql/queries/companyQueries'

import { apolloClient } from './graphql/apolloClient'

jest.mock('./graphql/apolloClient')

describe('Company Service', () => {
  test('getCompanies', async () => {
    apolloClient.query = jest.fn().mockReturnValueOnce({ data: { getCompanies: [{ id: '1', name: 'name' }] } })
    const result: Company[] = await getCompanies()
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: GET_COMPANIES,
      variables: {}
    })
    if (result) {
      expect(result[0].name).toEqual('name')
    }
  })
})
