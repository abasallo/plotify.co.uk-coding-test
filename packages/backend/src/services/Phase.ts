import { AppOrmModel } from '../orm/model/app.model'

import { Phase, Task } from 'plotify.co.uk-coding-test-shared'

export const isInUnblockedPhase = async (model: Promise<AppOrmModel>, phaseId: number): Promise<boolean> => {
  const phase: Phase = await (await model).Phase.findByPk(phaseId)
  if (phase.parentPhaseId === null) {
    return true
  }
  const parentPhase: Phase = await (await model).Phase.findByPk(phase.parentPhaseId)
  const parentPhaseTasks: Task[] = await (await model).Task.findAll({ where: { phaseId: parentPhase.id } })
  let result = true
  parentPhaseTasks.forEach((task) => {
    if (!task.completed) result = false
  })
  return result
}
export const getPhases = async (model: Promise<AppOrmModel>, companyId: string): Promise<Phase[]> => {
  const phases: Phase[] = await (await model).Phase.findAll({ where: { companyId } })
  for (const phase of phases) {
    phase.tasks = await (await model).Task.findAll({ where: { phaseId: phase.id } })
  }
  return phases
}
