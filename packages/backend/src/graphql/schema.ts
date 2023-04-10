import { gql } from 'apollo-server'

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    getCompanies: [Company]
    getPhases(companyId: String!): [Phase]
    getTasks(phaseId: String!): [Task]
  }

  type Mutation {
    toggleTaskCompletion(id: ID!): Task
  }

  type Company {
    id: ID!
    name: String!
  }

  type Phase {
    id: ID!
    companyId: ID!
    parentPhaseId: ID
    tasks: [Task]
    name: String!
  }

  type Task {
    id: ID!
    phaseId: ID!
    text: String!
    completed: Boolean!
  }
`
