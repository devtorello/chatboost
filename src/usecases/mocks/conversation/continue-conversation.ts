import { ContinueConversation, ContinueConversationResult } from '@/usecases/contracts/conversation'

export const mockContinueConversation = (): ContinueConversation => {
  class ContinueConversationStub implements ContinueConversation {
    async execute (): Promise<ContinueConversationResult> {
      return { data: { message: 'any text' } }
    }
  }

  return new ContinueConversationStub()
}
