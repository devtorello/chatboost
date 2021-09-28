import { ContinueConversationUseCase } from './continue-conversation'
import { mockDialogflow } from '@/services/mocks/dialogflow'
import { Dialogflow } from '@/services/contracts/dialogflow'
import { throwError } from '@/common/tests'

const mockMessage = (): string => 'This is a mock message.'

type SutTypes = {
  sut: ContinueConversationUseCase
  dialogflow: Dialogflow
}

const makeSut = (): SutTypes => {
  const dialogflow = mockDialogflow()
  const sut = new ContinueConversationUseCase({ dialogflow })

  return {
    sut,
    dialogflow
  }
}

describe('Start Conversation Use Case', () => {
  test('Should throw if trigger intent throws throws', async () => {
    const { sut, dialogflow } = makeSut()
    jest.spyOn(dialogflow, 'conversationIntent').mockImplementationOnce(throwError)
    const promise = sut.execute({ text: mockMessage() })
    await expect(promise).rejects.toThrow()
  })

  test('Should call trigger intent with right values', async () => {
    const { sut, dialogflow } = makeSut()
    const dialogSpy = jest.spyOn(dialogflow, 'conversationIntent')
    await sut.execute({ text: mockMessage() })
    expect(dialogSpy).toHaveBeenCalledWith(mockMessage())
  })

  test('Should return a start message on success', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({ text: mockMessage() })
    expect(result.data).toEqual({ message: mockMessage() })
  })
})
