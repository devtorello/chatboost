import { StartConversationController } from '@/controllers/implementations/conversation/start-conversation/start-conversation-controller'
import { StartConversationUseCase } from '@/usecases/implementations/conversation/start-conversation/start-conversation'
import { DialogflowService } from '@/services/implementations/dialogflow/dialogflow'
import { makeDialogflow } from '@/main/factories/auth/dialogflow-factory'
import { HttpController } from '@/controllers/contracts'
import env from '@/main/env'

export const makeStartConversation = (): HttpController => {
  const sessions = makeDialogflow()
  const dialogflow = new DialogflowService(sessions)

  const startConversationUseCase = new StartConversationUseCase({ dialogflow }, env.dialogflow.welcomeEvent)

  return new StartConversationController(startConversationUseCase)
}
