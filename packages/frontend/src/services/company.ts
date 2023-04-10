import { apolloClient } from './graphql/apolloClient'

import { GET_COMPANIES } from './graphql/queries/companyQueries'

import { Company } from 'plotify.co.uk-coding-test-shared'

export const getCompanies = async (): Promise<Company[]> => {
  const { data } = await apolloClient.query({
    query: GET_COMPANIES,
    variables: {}
  })
  return data.getCompanies
}
