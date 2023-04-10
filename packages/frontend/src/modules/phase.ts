import { Phase } from 'plotify.co.uk-coding-test-shared'

export const isComplete = (phases: Phase[]): boolean => {
  let result = true
  if (!phases || phases.length === 0) {
    return false
  }
  phases.forEach((phase) => {
    if (phase.tasks) {
      phase.tasks.forEach((task) => {
        if (!task.completed) result = false
      })
    }
  })
  return result
}

export const deepCopy = (phases: Phase[]): Phase[] => JSON.parse(JSON.stringify(phases))

export const toggleTaskById = (taskId: number, phases: Phase[]): Phase[] => {
  const newPhasesObject: Phase[] = deepCopy(phases)
  newPhasesObject.forEach((phase) => {
    if (phase.tasks) {
      phase.tasks.forEach((task) => {
        if (task.id === taskId) task.completed = !task.completed
      })
    }
  })
  return newPhasesObject
}
