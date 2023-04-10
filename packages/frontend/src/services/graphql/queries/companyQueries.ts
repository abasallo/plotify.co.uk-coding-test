import gql from 'graphql-tag'

export const GET_COMPANIES = gql`
  query GetCompanies {
    getCompanies {
      id
      name
    }
  }
`
