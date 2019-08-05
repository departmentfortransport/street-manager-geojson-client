import { GetWorksRequest } from '../interfaces/getWorksRequest';
import { GetActivitiesRequest } from '../interfaces/getActivitiesRequest';
import { WorkResponse } from '../interfaces/workResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { ActivityResponse } from '../interfaces/activitiesResponse';
export interface StreetManagerGeoJSONClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerGeoJSONClient {
    private config;
    private axios;
    constructor(config: StreetManagerGeoJSONClientConfig);
    status(): Promise<void>;
    getWorks(requestConfig: RequestConfig, getWorksRequest: GetWorksRequest): Promise<WorkResponse[]>;
    getActivities(requestConfig: RequestConfig, getActivitiesRequest: GetActivitiesRequest): Promise<ActivityResponse[]>;
    private httpHandler;
    private generateRequestConfig;
}
