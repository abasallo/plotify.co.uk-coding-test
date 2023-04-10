import { AppOrmModel } from '../orm/model/app.model'
import { TaskOrmModel } from '../orm/model/task.model'

import { Task } from 'plotify.co.uk-coding-test-shared'

import { ModelStatic } from 'sequelize/types/model'

import { isInUnblockedPhase } from './Phase'

export const getTasks = async (model: Promise<AppOrmModel>, phaseId: string): Promise<Task[]> =>
  (await model).Task.findAll({ where: { phaseId } })

export const toggleTaskCompletion = async (model: Promise<AppOrmModel>, id: string): Promise<Task> => {
  const ormTask: ModelStatic<TaskOrmModel> = (await model).Task
  const task: TaskOrmModel = await ormTask.findByPk(id)
  if (!task) {
    throw new Error(`There is no Task with id: ${id}`)
  }
  if (!task.completed && !(await isInUnblockedPhase(model, task.phaseId))) {
    throw new Error(`Task with id: ${id} cannot be changed`)
  }
  task.completed = !task.completed
  await task.save()
  return task
}
