import { GetWorksRequest } from '../interfaces/getWorksRequest';
import { GetActivitiesRequest } from '../interfaces/getActivitiesRequest';
import { WorkResponse } from '../interfaces/workResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { ActivityResponse } from '../interfaces/activitiesResponse';
import { ForwardPlanResponse } from '../interfaces/forwardPlanResponse';
import { GetForwardPlanRequest } from '../interfaces/getForwardPlanRequest';
import { Hs2ActLimitsResponse } from '../interfaces/hs2ActLimitsResponse';
import { GetHs2ActLimitsRequest } from '../interfaces/getHs2ActLimitsRequest';
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
    getHs2ActLimits(requestConfig: RequestConfig, getHs2ActLimitsRequest: GetHs2ActLimitsRequest): Promise<Hs2ActLimitsResponse>;
    private httpHandler;
    private generateRequestConfig;
}
