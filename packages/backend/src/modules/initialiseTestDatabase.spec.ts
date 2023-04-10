import { initialiseTestDatabase } from './initialiseTestDatabase'

import { AppOrmModel } from '../orm/model/app.model'

let testModel: AppOrmModel

beforeAll(async () => (testModel = await initialiseTestDatabase()))

describe('initialiseTestDatabase', () => {
  test('DB should be properly initialized', async () => {
    expect(testModel).toBeDefined()
    expect(await testModel.Company.count()).toEqual(3)
    expect(await testModel.Phase.count()).toEqual(6)
    expect(await testModel.Task.count()).toEqual(10)
  })
})
