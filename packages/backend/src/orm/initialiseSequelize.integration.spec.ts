import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'

import { AppOrmModel } from './model/app.model'

import { CompanyOrmModel } from './model/company.model'
import { PhaseOrmModel } from './model/phase.model'
import { TaskOrmModel } from './model/task.model'

let testModel: AppOrmModel

beforeAll(async () => (testModel = await initialiseTestDatabase()))

describe('ORM Integration Test', () => {
  test('ORM is initialised', async () => {
    expect(testModel.Company).toBeDefined()
    expect(testModel.Phase).toBeDefined()
    expect(testModel.Task).toBeDefined()
  })

  test('Company finders work as expected - findByPk', async () => {
    const company: CompanyOrmModel = await testModel.Company.findByPk(1)
    expect(company.id).toEqual(1)
    expect(company.name).toEqual('Company I')
  })

  test('Phase finders work as expected - findByPk', async () => {
    const phase: PhaseOrmModel = await testModel.Phase.findByPk(1)
    expect(phase.id).toEqual(1)
    expect(phase.companyId).toEqual(1)
    expect(phase.parentPhaseId).toEqual(null)
    expect(phase.name).toEqual('Phase I')
  })

  test('Task finders work as expected - findByPk', async () => {
    const task: TaskOrmModel = await testModel.Task.findByPk(1)
    expect(task.id).toEqual(1)
    expect(task.phaseId).toEqual(1)
    expect(task.text).toEqual('Task I')
    expect(task.completed).toBeFalsy()
  })
})
