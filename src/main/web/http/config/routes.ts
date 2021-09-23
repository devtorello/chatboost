import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/', router)
  readdirSync(path.join(__dirname, '/../routes')).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      await (await import(`../routes/${file}`)).default(router)
    }
  })
}
