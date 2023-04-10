import { model } from '../db'

import { Company, Phase, Task } from 'plotify.co.uk-coding-test-shared'

import { getTasks, toggleTaskCompletion } from '../services/Task'
import { getCompanies } from '../services/Company'
import { getPhases } from '../services/Phase'

export const resolvers = {
  Query: {
    getCompanies: (): Promise<Company[]> => getCompanies(model),
    getPhases: (parent: never, args: { companyId: string }): Promise<Phase[]> => getPhases(model, args.companyId),
    getTasks: (parent: never, args: { phaseId: string }): Promise<Task[]> => getTasks(model, args.phaseId)
  },
  Mutation: {
    toggleTaskCompletion: (parent: never, args: { id: string }): Promise<Task> => toggleTaskCompletion(model, args.id)
  }
}
