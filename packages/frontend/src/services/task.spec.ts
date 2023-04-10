import { toggleTaskCompletion } from './task'

import { Task } from 'plotify.co.uk-coding-test-shared'

import { TOGGLE_TASK_COMPLETION } from './graphql/queries/taskQueries'

import { apolloClient } from './graphql/apolloClient'

jest.mock('./graphql/apolloClient')

describe('Tasks Service', () => {
  test('toggleTaskCompletion', async () => {
    apolloClient.mutate = jest.fn().mockReturnValueOnce({
      data: { toggleTaskCompletion: [{ id: 1, text: 'text', completed: true }] }
    })
    const result: Task = await toggleTaskCompletion(1)
    expect(apolloClient.mutate).toHaveBeenCalledWith({
      mutation: TOGGLE_TASK_COMPLETION,
      variables: { id: 1 }
    })
    if (result) {
      expect(result[0].text).toEqual('text')
    }
  })
})
