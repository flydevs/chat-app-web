interface uuid{
    uuid: string
  }

interface apiResponse{
  data: {
    status: number;
    message: string;
  }
}

interface SendMessageInterface{
    message: {
        author_uuid: uuid,
        text: string,
        conversation_uuid: uuid,
    }
}

interface AuthInfo{
    uuid: uuid | undefined,
    access_token: string | undefined,
    refresh_token: string | undefined,
}

interface AuthLoginResponse {
    status: number
    data?: AuthInfo

}

interface LoginProp {
    username:string,
    password:string
}

export type {SendMessageInterface, AuthLoginResponse as AuthInfoInterface, AuthInfo, uuid, apiResponse, LoginProp}