interface uuid{
    uuid: string
  }
interface SendMessageInterface{
    message: {
        author_uuid: uuid,
        text: string,
        conversation_uuid: uuid,
    }
}

interface AuthInfoInterface {
    status: number
    data?: {
        uuid: uuid,
        access_token: string,
        refresh_token: string,
    }

}

export type {SendMessageInterface, AuthInfoInterface}