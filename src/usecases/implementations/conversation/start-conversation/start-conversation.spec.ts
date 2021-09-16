import { StartConversationUseCase } from './start-conversation'
import { mockDialogflow } from '@/services/mocks/dialogflow'
import { Dialogflow } from '@/services/contracts/dialogflow'

const mockMessage = (): string => 'This is a mock message.'

type SutTypes = {
  sut: StartConversationUseCase
  dialogflow: Dialogflow
}

const makeSut = (): SutTypes => {
  const dialogflow = mockDialogflow()
  const sut = new StartConversationUseCase({ dialogflow })

  return {
    sut,
    dialogflow
  }
}

describe('Start Conversation Use Case', () => {
  test('Should call trigger intent with right values', async () => {
    const { sut, dialogflow } = makeSut()
    const dialogSpy = jest.spyOn(dialogflow, 'triggerIntent')
    await sut.execute()
    expect(dialogSpy).toHaveBeenCalledWith('any_event')
  })

  test('Should return a start message on success', async () => {
    const { sut } = makeSut()
    const result = await sut.execute()
    expect(result.data).toEqual({ message: mockMessage() })
  })
})
