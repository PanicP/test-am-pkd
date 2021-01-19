import axios from 'axios'
import config from '../static/config'

const instance = axios.create()

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (e) => {
    return Promise.reject(e)
  }
)

const httpPokemon = (options) =>
  instance({ baseURL: config.apiPokemonBaseUrl, ...options })

export default {
  httpPokemon
}
