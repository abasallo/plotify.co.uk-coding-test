import { apolloClient } from './graphql/apolloClient'

import { TOGGLE_TASK_COMPLETION } from './graphql/queries/taskQueries'

import { Task } from 'plotify.co.uk-coding-test-shared'

export const toggleTaskCompletion = async (id: number): Promise<Task> => {
  const { data } = await apolloClient.mutate({
    mutation: TOGGLE_TASK_COMPLETION,
    variables: { id }
  })
  return data.toggleTaskCompletion
}
