import { HttpController, HttpRequest, HttpResponse } from '@/controllers/contracts'
import { ContinueConversation } from '@/usecases/contracts/conversation'
import { success, serverError } from '@/controllers/common/http-returns'

export class ContinueConversationController implements HttpController {
  constructor (
    private readonly continueConversation: ContinueConversation
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { text } = request.body

      const result = await this.continueConversation.execute({ text })

      return success(result)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
