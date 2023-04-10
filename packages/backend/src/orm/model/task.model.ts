import { Model, Optional } from 'sequelize'

import { Task } from 'plotify.co.uk-coding-test-shared'

type TaskCreation = Optional<Task, 'id'>

export interface TaskOrmModel extends Model<Task, TaskCreation>, Task {}
