import { Dialogflow } from '@/services/contracts/dialogflow'

export const mockDialogflow = (): Dialogflow => {
  class DialogflowStub implements Dialogflow {
    async triggerIntent (event: string): Promise<string> {
      return 'This is a mock message.'
    }

    async conversationIntent (text: string): Promise<string> {
      return 'This is a mock message.'
    }
  }

  return new DialogflowStub()
}
