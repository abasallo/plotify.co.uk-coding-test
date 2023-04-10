import express, { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import index from './express/routes/index'

import { initialiseApolloServer } from './graphql/init'

export const app: Express = express()

initialiseApolloServer(app)
  .then(() => console.log('Apollo Server initialised'))
  .catch((error) => console.error('Apollo Server initialisation error: ' + error))

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)
