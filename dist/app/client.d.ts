import { GetWorksRequest } from '../interfaces/getWorksRequest';
import { GetActivitiesRequest } from '../interfaces/getActivitiesRequest';
import { WorkResponse } from '../interfaces/workResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { ActivityResponse } from '../interfaces/activitiesResponse';
import { ForwardPlanResponse } from '../interfaces/forwardPlanResponse';
import { GetForwardPlanRequest } from '../interfaces/getForwardPlanRequest';
export interface StreetManagerGeoJSONClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerGeoJSONClient {
    private config;
    private axios;
    constructor(config: StreetManagerGeoJSONClientConfig);
    status(): Promise<void>;
    getWorks(requestConfig: RequestConfig, getWorksRequest: GetWorksRequest): Promise<WorkResponse>;
    getActivities(requestConfig: RequestConfig, getActivitiesRequest: GetActivitiesRequest): Promise<ActivityResponse>;
    getForwardPlans(requestConfig: RequestConfig, getForwardPlansRequest: GetForwardPlanRequest): Promise<ForwardPlanResponse>;
    private httpHandler;
    private generateRequestConfig;
}
