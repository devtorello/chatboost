import { mockContinueConversation } from '@/usecases/mocks/conversation/continue-conversation'
import { ContinueConversationController } from './continue-conversation-controller'
import { success, serverError } from '@/controllers/common/http-returns'
import { ContinueConversation } from '@/usecases/contracts/conversation'
import { HttpRequest } from '@/controllers/contracts'
import { throwError } from '@/common/tests'

const mockRequest = (): HttpRequest => ({
  body: {
    text: 'any text'
  }
})

type SutTypes = {
  sut: ContinueConversationController
  continueConversation: ContinueConversation
}

const makeSut = (): SutTypes => {
  const continueConversation = mockContinueConversation()
  const sut = new ContinueConversationController(continueConversation)

  return {
    sut,
    continueConversation
  }
}

describe('Start Conversation Controller', () => {
  test('Should return 200 if it does not throw', async () => {
    const { sut } = makeSut()
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(success({ data: { message: 'any text' } }))
  })

  test('Should return 500 if Start Conversation throws', async () => {
    const { sut, continueConversation } = makeSut()
    jest.spyOn(continueConversation, 'execute').mockImplementationOnce(throwError)
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(serverError(new Error()))
  })
})
