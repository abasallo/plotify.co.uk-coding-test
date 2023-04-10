import { Model, Optional } from 'sequelize'

import { Company } from 'plotify.co.uk-coding-test-shared'

type CompanyCreation = Optional<Company, 'id'>

export interface CompanyOrmModel extends Model<Company, CompanyCreation>, Company {}
