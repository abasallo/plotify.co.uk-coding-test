import { Task } from './task.model'

export interface Phase {
  id: number
  companyId: number
  parentPhaseId: number | null
  tasks?: Task[]
  name: string
}
