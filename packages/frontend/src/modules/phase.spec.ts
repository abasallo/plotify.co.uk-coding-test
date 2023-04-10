import { Phase } from 'plotify.co.uk-coding-test-shared'

import {
  phasesWithUncompletedTasks,
  phasesWithUncompletedTasksAlternative,
  phasesWithFullyUncompletedTasks,
  phasesWithCompletedTasks
} from './testUtils'

import { deepCopy, isComplete, toggleTaskById } from './phase'

describe('Phase Utils', () => {
  describe('isComplete', () => {
    test('Undefined Tasks', () => {
      expect(isComplete(undefined)).toBeFalsy()
    })

    test('Empty list of Tasks', () => {
      expect(isComplete([])).toBeFalsy()
    })

    test('Uncompleted Tasks', () => {
      expect(isComplete(phasesWithUncompletedTasks)).toBeFalsy()
    })

    test('Uncompleted Tasks - Alternative', () => {
      expect(isComplete(phasesWithUncompletedTasksAlternative)).toBeFalsy()
    })

    test('Fully Uncompleted Tasks', () => {
      expect(isComplete(phasesWithFullyUncompletedTasks)).toBeFalsy()
    })

    test('Completed Tasks', () => {
      expect(isComplete(phasesWithCompletedTasks)).toBeTruthy()
    })
  })

  test('deepCopy', () => {
    const copyOfPhasesWithCompletedTasks: Phase[] = deepCopy(phasesWithCompletedTasks)
    expect(copyOfPhasesWithCompletedTasks.length).toBe(3)
    expect(copyOfPhasesWithCompletedTasks[0].tasks).toBeUndefined()
    expect(copyOfPhasesWithCompletedTasks[1].tasks.length).toBe(0)
    expect(copyOfPhasesWithCompletedTasks[2].name).toEqual('Phase III')
    expect(copyOfPhasesWithCompletedTasks[2].tasks.length).toEqual(2)
    expect(copyOfPhasesWithCompletedTasks[2].tasks[0].completed).toBeTruthy()
    expect(copyOfPhasesWithCompletedTasks[2].tasks[1].completed).toBeTruthy()
  })

  test('toggleTaskById', () => {
    const result: Phase[] = toggleTaskById(1, phasesWithCompletedTasks)
    expect(result.length).toBe(3)
    expect(result[0].tasks).toBeUndefined()
    expect(result[1].tasks.length).toBe(0)
    expect(result[2].name).toEqual('Phase III')
    expect(result[2].tasks.length).toEqual(2)
    expect(result[2].tasks[0].completed).toBeFalsy()
    expect(result[2].tasks[1].completed).toBeTruthy()
  })
})
