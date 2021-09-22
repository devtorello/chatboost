import { HttpResponse } from '@/controllers/contracts'
import { ServerError } from '@/controllers/common'

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack)
})

export const noContent = (): HttpResponse => ({
  status: 204,
  body: null
})
