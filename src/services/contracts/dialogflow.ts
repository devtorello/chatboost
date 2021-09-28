export interface Dialogflow {
  triggerIntent: (event: string) => Promise<any>
  conversationIntent: (text: string) => Promise<any>
}
