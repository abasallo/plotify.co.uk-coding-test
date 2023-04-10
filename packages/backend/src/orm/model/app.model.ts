import { ModelStatic } from 'sequelize/types/model'

import { CompanyOrmModel } from './company.model'
import { PhaseOrmModel } from './phase.model'
import { TaskOrmModel } from './task.model'

export interface AppOrmModel {
  Company: ModelStatic<CompanyOrmModel>
  Phase: ModelStatic<PhaseOrmModel>
  Task: ModelStatic<TaskOrmModel>
}
