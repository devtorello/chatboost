import { StartConversationUseCase } from './start-conversation'

const mockMessage = (): string => 'This is a mock message.'

type SutTypes = {
  sut: StartConversationUseCase
}

const makeSut = (): SutTypes => {
  const sut = new StartConversationUseCase()

  return {
    sut
  }
}

describe('Start Conversation Use Case', () => {
  test('Should return a start message on success', async () => {
    const { sut } = makeSut()
    const result = await sut.execute()
    expect(result.data).toEqual({ message: mockMessage() })
  })
})
