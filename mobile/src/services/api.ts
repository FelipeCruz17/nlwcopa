import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.29.151.19:3333'
})