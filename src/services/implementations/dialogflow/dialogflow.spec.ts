import { SessionsClient } from '@google-cloud/dialogflow'
import { mockUUID } from '@/services/mocks/uuid'
import { DialogflowService } from './dialogflow'

const EVENT = 'any_event'

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
  test('Should return a message', async () => {
    const { sut } = makeSut()
    const result = await sut.triggerIntent(EVENT)
    expect(result).toEqual('any_message')
  })
})
