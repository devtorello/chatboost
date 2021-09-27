import { Dialogflow } from '@/services/contracts/dialogflow'
import { SessionsClient } from '@google-cloud/dialogflow'
import { UUID } from '@/services/contracts/uuid'

export class DialogflowService implements Dialogflow {
  constructor (
    private readonly sessions: SessionsClient,
    private readonly uuid: UUID,
    private readonly projectId: string
  ) { }

  private createSession (): string {
    return this.sessions.projectAgentSessionPath(this.projectId, this.uuid.generate())
  }

  async triggerIntent (event: string): Promise<any> {
    const [message] = await this.sessions.detectIntent({
      session: this.createSession(),
      queryInput: {
        event: {
          name: event,
          languageCode: 'pt-BR'
        }
      }
    })

    return message.queryResult.fulfillmentText
  }

  async conversationIntent (text: string): Promise<any> {
    const [message] = await this.sessions.detectIntent({
      session: this.createSession(),
      queryInput: {
        text: {
          text,
          languageCode: 'pt-BR'
        }
      }
    })

    return message.queryResult.fulfillmentText
  }
}
