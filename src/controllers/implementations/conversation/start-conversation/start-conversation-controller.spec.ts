import { mockStartConversation } from '@/usecases/mocks/conversation/start-conversation'
import { StartConversationController } from './start-conversation-controller'
import { noContent, serverError } from '@/controllers/common/http-returns'
import { StartConversation } from '@/usecases/contracts/conversation'
import { HttpRequest } from '@/controllers/contracts'
import { throwError } from '@/common/tests'

const mockRequest = (): HttpRequest => ({})

type SutTypes = {
  sut: StartConversationController
  startConversation: StartConversation
}

const makeSut = (): SutTypes => {
  const startConversation = mockStartConversation()
  const sut = new StartConversationController(startConversation)

  return {
    sut,
    startConversation
  }
}

describe('Start Conversation Controller', () => {
  test('Should return 204 if it does not throw', async () => {
    const { sut } = makeSut()
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(noContent())
  })

  test('Should return 500 if Start Conversation throws', async () => {
    const { sut, startConversation } = makeSut()
    jest.spyOn(startConversation, 'execute').mockImplementationOnce(throwError)
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(serverError(new Error()))
  })
})
