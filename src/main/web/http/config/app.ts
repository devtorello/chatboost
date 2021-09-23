import { setupMiddlewares } from './middlewares'
import express, { Express } from 'express'
import { setupRoutes } from './routes'
import cors from 'cors'

export const makeExpressApp = (): Express => {
  const app = express()
  app.use(cors({ origin: true }))
  setupMiddlewares(app)
  setupRoutes(app)

  return app
}
