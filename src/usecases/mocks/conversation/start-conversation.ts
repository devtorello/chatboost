import { StartConversation, StartConversationResult } from '@/usecases/contracts/conversation'

export const mockStartConversation = (): StartConversation => {
  class StartConversationStub implements StartConversation {
    async execute (): Promise<StartConversationResult> {
      return { data: { message: 'any_message' } }
    }
  }

  return new StartConversationStub()
}
