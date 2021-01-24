import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios'
const BACKEND_URL = 'https://jsonplaceholder.typicode.com/'

export const apiCall = async (
  route: string = '',
  method: Method = 'GET',
  body?: string
) => {
  const url = `${BACKEND_URL}${route}`
  const config: AxiosRequestConfig = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    config.data = JSON.stringify(body)
  }

  const response: AxiosResponse = await axios(config)
  return response.data
}
