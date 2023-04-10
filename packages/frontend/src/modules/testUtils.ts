import { Phase, Task } from 'plotify.co.uk-coding-test-shared'

const phaseWithUndefinedTask: Phase = { id: 1, companyId: 1, parentPhaseId: null, name: 'Phase I', tasks: undefined }
const phaseWithEmptyTask: Phase = { id: 2, companyId: 1, parentPhaseId: 1, name: 'Phase II', tasks: [] }

const uncompletedTasks: Task[] = [
  { id: 1, phaseId: 1, text: 'Task I', completed: true },
  { id: 2, phaseId: 1, text: 'Task I', completed: false }
]
const uncompletedTasksAlternative: Task[] = [
  { id: 1, phaseId: 1, text: 'Task I', completed: false },
  { id: 2, phaseId: 1, text: 'Task I', completed: true }
]
const fullyUncompletedTasks: Task[] = [
  { id: 1, phaseId: 1, text: 'Task I', completed: false },
  { id: 2, phaseId: 1, text: 'Task I', completed: false }
]
const completedTasks: Task[] = [
  { id: 1, phaseId: 1, text: 'Task I', completed: true },
  { id: 2, phaseId: 1, text: 'Task I', completed: true }
]

export const phasesWithUncompletedTasks: Phase[] = [
  phaseWithUndefinedTask,
  phaseWithEmptyTask,
  { id: 3, companyId: 1, parentPhaseId: 2, name: 'Phase III', tasks: uncompletedTasks }
]
export const phasesWithUncompletedTasksAlternative: Phase[] = [
  phaseWithUndefinedTask,
  phaseWithEmptyTask,
  { id: 3, companyId: 1, parentPhaseId: 2, name: 'Phase III', tasks: uncompletedTasksAlternative }
]
export const phasesWithFullyUncompletedTasks: Phase[] = [
  phaseWithUndefinedTask,
  phaseWithEmptyTask,
  { id: 3, companyId: 1, parentPhaseId: 2, name: 'Phase III', tasks: fullyUncompletedTasks }
]
export const phasesWithCompletedTasks: Phase[] = [
  phaseWithUndefinedTask,
  phaseWithEmptyTask,
  { id: 3, companyId: 1, parentPhaseId: 2, name: 'Phase III', tasks: completedTasks }
]
