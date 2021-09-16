import { StartConversation, StartConversationResult } from '@/usecases/contracts/conversation'
import { Dialogflow } from '@/services/contracts/dialogflow'
import { result } from '@/usecases/common'

type Dependencies = {
  dialogflow: Dialogflow
}

export class StartConversationUseCase implements StartConversation {
  private readonly dialogflow: Dialogflow
  private readonly dialogflowEvent: string

  constructor (dependencies: Dependencies, dialogflowEvent: string) {
    this.dialogflow = dependencies.dialogflow
    this.dialogflowEvent = dialogflowEvent
  }

  async execute (): Promise<StartConversationResult> {
    const message = await this.dialogflow.triggerIntent(this.dialogflowEvent)

    return result({ message })
  }
}
