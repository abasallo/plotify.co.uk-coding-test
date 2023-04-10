import gql from 'graphql-tag'

export const GET_PHASES = gql`
  query GetPhases($companyId: String!) {
    getPhases(companyId: $companyId) {
      id
      name
      tasks {
        id
        text
        completed
      }
    }
  }
`
