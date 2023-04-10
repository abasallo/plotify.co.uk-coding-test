import { AppOrmModel } from '../orm/model/app.model'

import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'

import { getCompanies } from './Company'

import { Company } from 'plotify.co.uk-coding-test-shared'

let testModel: Promise<AppOrmModel>

beforeAll(async () => (testModel = initialiseTestDatabase()))

describe('Company Service', () => {
  describe('getCompanies', () => {
    test('result is as expected', async () => {
      const companies: Company[] = await getCompanies(testModel)
      expect(companies.length).toEqual(3)
      expect(companies[0].name).toEqual('Company I')
      expect(companies[1].name).toEqual('Company II')
      expect(companies[2].name).toEqual('Company III')
    })
  })
})
