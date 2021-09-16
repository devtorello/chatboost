import { StartConversation, StartConversationResult } from '@/usecases/contracts/conversation'

export class StartConversationUseCase implements StartConversation {
  async execute (): Promise<StartConversationResult> {
    const message = 'This is a mock message.'

    return { data: { message } }
  }
}
