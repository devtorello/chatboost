import { ContinueConversationController } from '@/controllers/implementations/conversation/continue-conversation/continue-conversation-controller'
import { ContinueConversationUseCase } from '@/usecases/implementations/conversation/continue-conversation/continue-conversation'
import { DialogflowService } from '@/services/implementations/dialogflow/dialogflow'
import { makeDialogflow } from '@/main/factories/auth/dialogflow-factory'
import { UUIDService } from '@/services/implementations/uuid/uuid'
import { HttpController } from '@/controllers/contracts'
import env from '@/main/env'

export const makeContinueConversation = (): HttpController => {
  const sessions = makeDialogflow()
  const uuid = new UUIDService()

  const dialogflow = new DialogflowService(sessions, uuid, env.google.projectId)

  const startConversationUseCase = new ContinueConversationUseCase({ dialogflow })

  return new ContinueConversationController(startConversationUseCase)
}
