import { SessionsClient } from '@google-cloud/dialogflow'
import env from '@/main/env'

export const makeDialogflow = (): SessionsClient => {
  return new SessionsClient({
    projectId: env.google.projectId,
    keyFile: env.google.credentials
  })
}
