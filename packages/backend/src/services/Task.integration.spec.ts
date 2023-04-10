import { AppOrmModel } from '../orm/model/app.model'

import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'

import { Task } from 'plotify.co.uk-coding-test-shared'

import { getTasks, toggleTaskCompletion } from './Task'

let testModel: Promise<AppOrmModel>

beforeAll(async () => (testModel = initialiseTestDatabase()))

describe('Task Service', () => {
  describe('getTasks', () => {
    test('result is as expected', async () => {
      const tasks: Task[] = await getTasks(testModel, '3')
      expect(tasks.length).toEqual(3)
      expect(tasks[0].id).toEqual(4)
      expect(tasks[1].id).toEqual(5)
      expect(tasks[2].id).toEqual(6)
    })
  })

  describe('toggleTaskCompletion', () => {
    test('result is as expected', async () => {
      const task: Task = await toggleTaskCompletion(testModel, '10')
      expect(task.id).toEqual(10)
      expect(task.completed).toBeTruthy()
    })
  })
})
