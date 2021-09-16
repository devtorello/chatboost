import { StartConversation, StartConversationResult } from '@/usecases/contracts/conversation'
import { result } from '@/usecases/common'

export class StartConversationUseCase implements StartConversation {
  async execute (): Promise<StartConversationResult> {
    const message = 'This is a mock message.'

    return result({ message })
  }
}
