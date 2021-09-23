import { StartConversationController } from '@/controllers/implementations/conversation/start-conversation/start-conversation-controller'
import { StartConversationUseCase } from '@/usecases/implementations/conversation/start-conversation/start-conversation'
import { DialogflowService } from '@/services/implementations/dialogflow/dialogflow'
import { makeDialogflow } from '@/main/factories/auth/dialogflow-factory'
import { UUIDService } from '@/services/implementations/uuid/uuid'
import { HttpController } from '@/controllers/contracts'
import env from '@/main/env'

export const makeStartConversation = (): HttpController => {
  const sessions = makeDialogflow()
  const uuid = new UUIDService()

  const dialogflow = new DialogflowService(sessions, uuid, env.google.projectId)

  const startConversationUseCase = new StartConversationUseCase({ dialogflow }, env.dialogflow.welcomeEvent)

  return new StartConversationController(startConversationUseCase)
}
