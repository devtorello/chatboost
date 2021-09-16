import { StartConversation, StartConversationResult } from '@/usecases/contracts/conversation'
import { Dialogflow } from '@/services/contracts/dialogflow'
import { result } from '@/usecases/common'

type Dependencies = {
  dialogflow: Dialogflow
}

export class StartConversationUseCase implements StartConversation {
  private readonly dialogflow: Dialogflow

  constructor (dependencies: Dependencies) {
    this.dialogflow = dependencies.dialogflow
  }

  async execute (): Promise<StartConversationResult> {
    const message = await this.dialogflow.triggerIntent('any_event')

    return result({ message })
  }
}
