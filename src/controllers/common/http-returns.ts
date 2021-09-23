import { HttpResponse } from '@/controllers/contracts'
import { ServerError } from '@/controllers/common'

export const success = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack)
})
