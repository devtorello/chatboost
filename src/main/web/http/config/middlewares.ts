import { contentType } from '@/main/web/http/middlewares/content-type'
import express, { Express } from 'express'

export const setupMiddlewares = (app: Express): void => {
  app.use(express.json())
  app.use(contentType)
}
