const isDev = process.env.NODE_ENV !== 'production'

export const API_URL = isDev ? 'http://localhost:3002/' : 'http://api.voyager.com.br/'
