import { ContinueConversation, ContinueConversationDTO, ContinueConversationResult } from '@/usecases/contracts/conversation'
import { Dialogflow } from '@/services/contracts/dialogflow'
import { result } from '@/usecases/common'

type Dependencies = {
  dialogflow: Dialogflow
}

export class ContinueConversationUseCase implements ContinueConversation {
  private readonly dialogflow: Dialogflow

  constructor (dependencies: Dependencies) {
    this.dialogflow = dependencies.dialogflow
  }

  async execute ({ text }: ContinueConversationDTO): Promise<ContinueConversationResult> {
    const message = await this.dialogflow.conversationIntent(text)

    return result({ message })
  }
}
