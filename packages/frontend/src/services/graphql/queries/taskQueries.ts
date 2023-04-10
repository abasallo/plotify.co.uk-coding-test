import gql from 'graphql-tag'

export const TOGGLE_TASK_COMPLETION = gql`
  mutation ToggleTaskCompletion($id: ID!) {
    toggleTaskCompletion(id: $id) {
      id
      text
      completed
    }
  }
`
