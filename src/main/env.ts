import { config } from 'dotenv'

config()

const application = {
  port: process.env.PORT
}

const google = {
  projectId: process.env.PROJECT_ID,
  credentials: process.env.CREDENTIALS
}

const dialogflow = {
  welcomeEvent: process.env.CHATBOT_WELCOME_EVENT
}

const env = { application, google, dialogflow }

export default { ...env }
