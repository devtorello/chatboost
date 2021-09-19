import { SessionsClient } from '@google-cloud/dialogflow'
import { DialogflowService } from './dialogflow'

const EVENT = 'any_event'

jest.mock('@google-cloud/dialogflow')

type SutTypes = {
  sut: DialogflowService
  sessions: SessionsClient
}

const makeSut = (): SutTypes => {
  const sessions = new SessionsClient()
  const sut = new DialogflowService(sessions)

  return {
    sut,
    sessions
  }
}

describe('Dialogflow Service', () => {
  // TODO: Fix tests after testing the API return
  test('Should return a message', async () => {
    const { sut } = makeSut()
    const result = await sut.triggerIntent(EVENT)
    expect(result).not.toEqual('This is a mock message.')
  })
})
