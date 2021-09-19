import { Dialogflow } from '@/services/contracts/dialogflow'
import { SessionsClient } from '@google-cloud/dialogflow'

export class DialogflowService implements Dialogflow {
  constructor (
    private readonly sessions: SessionsClient
  ) { }

  async triggerIntent (event: string): Promise<any> {
    const message = await this.sessions.detectIntent({
      queryInput: {
        event: {
          name: event
        }
      }
    })

    return message
  }
}
