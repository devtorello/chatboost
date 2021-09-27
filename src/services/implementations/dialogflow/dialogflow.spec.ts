import { SessionsClient } from '@google-cloud/dialogflow'
import { mockUUID } from '@/services/mocks/uuid'
import { DialogflowService } from './dialogflow'

const EVENT = 'any_event'
const TEXT = 'any text'

jest.mock('@google-cloud/dialogflow', () => ({
  SessionsClient: jest.fn().mockImplementation(() => ({
    projectAgentSessionPath: () => 'any_path',
    detectIntent: () => [{ queryResult: { fulfillmentText: 'any_message' } }]
  }))
}))

type SutTypes = {
  sut: DialogflowService
  sessions: SessionsClient
}

const makeSut = (): SutTypes => {
  const sessions = new SessionsClient()
  const uuid = mockUUID()
  const projectId = 'any_project'
  const sut = new DialogflowService(sessions, uuid, projectId)

  return {
    sut,
    sessions
  }
}

describe('Dialogflow Service', () => {
  describe('Trigger', () => {
    test('Should return a message', async () => {
      const { sut } = makeSut()
      const result = await sut.triggerIntent(EVENT)
      expect(result).toEqual('any_message')
    })
  })

  describe('Text', () => {
    test('Should return a text', async () => {
      const { sut } = makeSut()
      const result = await sut.conversationIntent(TEXT)
      expect(result).toEqual('any text')
    })
  })
})
