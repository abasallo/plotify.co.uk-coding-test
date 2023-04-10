import { AppOrmModel } from '../orm/model/app.model'

import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'

import { getPhases } from './Phase'

import { Phase } from 'plotify.co.uk-coding-test-shared'

let testModel: Promise<AppOrmModel>

beforeAll(async () => (testModel = initialiseTestDatabase()))

describe('Phase Service', () => {
  describe('getPhases', () => {
    test('result is as expected', async () => {
      const phases: Phase[] = await getPhases(testModel, '1')
      expect(phases.length).toEqual(3)

      expect(phases[0].name).toEqual('Phase I')
      expect(phases[0].tasks.length).toEqual(1)

      expect(phases[1].name).toEqual('Phase II')
      expect(phases[1].tasks.length).toEqual(2)

      expect(phases[2].name).toEqual('Phase III')
      expect(phases[2].tasks.length).toEqual(3)
    })
  })
})
