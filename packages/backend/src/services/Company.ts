import { AppOrmModel } from '../orm/model/app.model'

import { Company } from 'plotify.co.uk-coding-test-shared'

export const getCompanies = async (model: Promise<AppOrmModel>): Promise<Company[]> => (await model).Company.findAll()
