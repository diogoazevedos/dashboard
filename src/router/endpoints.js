const isDev = process.env.NODE_ENV !== 'production'

export const API_URL = isDev ? 'http://localhost:8080/api/' : 'http://www.voyager.com.br/api/'
