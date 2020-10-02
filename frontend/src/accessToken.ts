let accessToken: string = ''

export const setAccesToken = (token: string ) => {
  accessToken = token
}

export const getAccessToken = () => {
  return accessToken
}