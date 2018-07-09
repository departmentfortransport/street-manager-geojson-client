import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { OK } from 'http-status-codes'

export interface StreetManagerGeoJSONClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerGeoJSONClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerGeoJSONClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public async isAvailable(): Promise<boolean> {
    try {
      let response: AxiosResponse = await this.axios.get('/status')
      return response.status === OK
    } catch (err) {
      return false
    }
  }
}
