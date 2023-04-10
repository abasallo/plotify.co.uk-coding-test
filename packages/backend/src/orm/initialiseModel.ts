import { DataTypes, Sequelize } from 'sequelize'
import { ModelStatic } from 'sequelize/types/model'

import { AppOrmModel } from './model/app.model'

import { CompanyOrmModel } from './model/company.model'
import { PhaseOrmModel } from './model/phase.model'
import { TaskOrmModel } from './model/task.model'

const Company = (sequelize: Sequelize): ModelStatic<CompanyOrmModel> =>
  sequelize.define<CompanyOrmModel>('Company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
  })

const Phase = (sequelize: Sequelize): ModelStatic<PhaseOrmModel> =>
  sequelize.define<PhaseOrmModel>('Phase', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    companyId: { type: DataTypes.INTEGER },
    parentPhaseId: { type: DataTypes.INTEGER, allowNull: true },
    name: { type: DataTypes.STRING }
  })

const Task = (sequelize: Sequelize): ModelStatic<TaskOrmModel> =>
  sequelize.define<TaskOrmModel>('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phaseId: { type: DataTypes.INTEGER },
    text: { type: DataTypes.STRING },
    completed: { type: DataTypes.BOOLEAN }
  })

export const initializeModel = (sequelize: Sequelize): AppOrmModel => ({
  Company: Company(sequelize),
  Phase: Phase(sequelize),
  Task: Task(sequelize)
})
