export type StartConversationResultData = {
  message: string
}

export type StartConversationResult = {
  data: StartConversationResultData
}

export interface StartConversation {
  execute: () => Promise<StartConversationResult>
}
