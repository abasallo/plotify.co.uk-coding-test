import { apolloClient } from './graphql/apolloClient'

import { GET_PHASES } from './graphql/queries/phaseQueries'

import { Phase } from 'plotify.co.uk-coding-test-shared'

export const getPhases = async (companyId: string): Promise<Phase[]> => {
  const { data } = await apolloClient.query({
    query: GET_PHASES,
    variables: { companyId }
  })
  return data.getPhases
}
