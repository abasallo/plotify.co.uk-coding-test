import { initialiseSequelize } from '../orm/initialiseSequelize'

import { AppOrmModel } from '../orm/model/app.model'

const TEST_CONNECTION_URL = 'sqlite://plotify.co.uk-coding-test.sqlite'

let testModel: AppOrmModel

const destroyTestDatabase = (): Promise<[number, number, number]> =>
  Promise.all([
    testModel.Company.destroy({ truncate: true }),
    testModel.Phase.destroy({ truncate: true }),
    testModel.Task.destroy({ truncate: true })
  ])

export const initialiseTestDatabase = async (): Promise<AppOrmModel> => {
  testModel = await initialiseSequelize(TEST_CONNECTION_URL)

  await destroyTestDatabase()

  await Promise.all([
    testModel.Company.create({ id: 1, name: 'Company I' }),
    testModel.Company.create({ id: 2, name: 'Company II' }),
    testModel.Company.create({ id: 3, name: 'Company III' }),

    testModel.Phase.create({ id: 1, companyId: 1, parentPhaseId: null, name: 'Phase I' }),
    testModel.Phase.create({ id: 2, companyId: 1, parentPhaseId: 1, name: 'Phase II' }),
    testModel.Phase.create({ id: 3, companyId: 1, parentPhaseId: 2, name: 'Phase III' }),

    testModel.Phase.create({ id: 4, companyId: 2, parentPhaseId: null, name: 'Phase I' }),
    testModel.Phase.create({ id: 5, companyId: 2, parentPhaseId: 4, name: 'Phase II' }),

    testModel.Phase.create({ id: 6, companyId: 3, parentPhaseId: null, name: 'Phase I' }),

    testModel.Task.create({ id: 1, phaseId: 1, text: 'Task I', completed: false }),
    testModel.Task.create({ id: 2, phaseId: 2, text: 'Task I', completed: false }),
    testModel.Task.create({ id: 3, phaseId: 2, text: 'Task II', completed: false }),
    testModel.Task.create({ id: 4, phaseId: 3, text: 'Task I', completed: false }),
    testModel.Task.create({ id: 5, phaseId: 3, text: 'Task II', completed: false }),
    testModel.Task.create({ id: 6, phaseId: 3, text: 'Task III', completed: false }),

    testModel.Task.create({ id: 7, phaseId: 4, text: 'Task I', completed: false }),
    testModel.Task.create({ id: 8, phaseId: 5, text: 'Task I', completed: false }),
    testModel.Task.create({ id: 9, phaseId: 5, text: 'Task II', completed: false }),

    testModel.Task.create({ id: 10, phaseId: 6, text: 'Task I', completed: false })
  ])

  return testModel
}
