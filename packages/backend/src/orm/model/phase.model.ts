import { Model, Optional } from 'sequelize'

import { Phase } from 'plotify.co.uk-coding-test-shared'

type PhaseCreation = Optional<Phase, 'id'>

export interface PhaseOrmModel extends Model<Phase, PhaseCreation>, Phase {}
