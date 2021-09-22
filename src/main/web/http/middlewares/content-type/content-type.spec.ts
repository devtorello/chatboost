import express, { Request, Response, Express } from 'express'
import { contentType } from './content-type'
import request from 'supertest'

let app: Express

describe('Content Type Middleware', () => {
  beforeAll(() => {
    app = express()
    app.use(contentType)
  })

  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (_req: Request, res: Response) => {
      res.send('')
    })
    await request(app)
      .get('/test_content_type')
      .set('x-goog-authenticated-user-id', 'any_user_id')
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (_req: Request, res: Response) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/test_content_type_xml')
      .set('x-goog-authenticated-user-id', 'any_user_id')
      .expect('content-type', /xml/)
  })
})
