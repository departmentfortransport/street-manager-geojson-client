import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { GetWorksRequest } from '../interfaces/getWorksRequest'
import { GetActivitiesRequest } from '../interfaces/getActivitiesRequest'
import { WorkResponse } from '../interfaces/workResponse'
import { RequestConfig } from '../interfaces/requestConfig'
import { ActivityResponse } from '../interfaces/activitiesResponse'

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

  public async status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public async getWorks(requestConfig: RequestConfig, getWorksRequest: GetWorksRequest): Promise<WorkResponse[]> {
    let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig)

    config.params = getWorksRequest

    return this.httpHandler<WorkResponse[]>(() => this.axios.get(`/works`, config))
  }

  public async getActivities(requestConfig: RequestConfig, getActivitiesRequest: GetActivitiesRequest): Promise<ActivityResponse[]> {
    let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig)

    config.params = getActivitiesRequest

    return this.httpHandler<ActivityResponse[]>(() => this.axios.get(`/activities`, config))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      if (err && err.response && err.response.status) {
        err.status = err.response.status
      }
      return Promise.reject(err)
    }
  }

  private generateRequestConfig(config: RequestConfig): AxiosRequestConfig {
    let headers = {}
    if (config.token) {
      headers['token'] = config.token
    }
    headers['request-id'] = config.requestId
    return { headers: headers, params: {} }
  }
}
