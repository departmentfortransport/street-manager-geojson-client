import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { OK } from 'http-status-codes'
import { WorkResponse } from '../interfaces/workResponse'

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

  public async getWorks(requestId: string, minEasting: number, minNorthing: number, maxEasting: number, maxNorthing: number): Promise<WorkResponse[]> {
    let config: AxiosRequestConfig = this.generateRequestConfig(requestId, { minEasting: minEasting, minNorthing: minNorthing, maxEasting: maxEasting, maxNorthing: maxNorthing })
    return this.httpHandler<WorkResponse[]>(() => this.axios.get(`/works`, config))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      err.status = err.response.status
      return Promise.reject(err)
    }
  }

  private generateRequestConfig(requestId, params): AxiosRequestConfig {
    let headers = {}
    headers['request-id'] = requestId
    return { headers: headers, params: params }
  }
}
