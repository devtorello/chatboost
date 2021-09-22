import { setupMiddlewares } from './middlewares'
import express, { Express } from 'express'
import { setupRoutes } from './routes'
import cors from 'cors'

export const makeExpressApp = (usecase?: string): Express => {
  const app = express()
  app.use(cors({ origin: true }))
  setupMiddlewares(app)
  setupRoutes(app, usecase)

  return app
}
