import { Sequelize } from 'sequelize'

import { initializeModel } from './initialiseModel'

import { AppOrmModel } from './model/app.model'

export const initialiseSequelize = async (CONNECTION_URL: string): Promise<AppOrmModel> => {
  const sequelize: Sequelize = new Sequelize(CONNECTION_URL)
  const model: AppOrmModel = initializeModel(sequelize)
  await sequelize.sync()
  return model
}
