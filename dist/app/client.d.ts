import { WorkResponse } from '../interfaces/workResponse';
export interface StreetManagerGeoJSONClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerGeoJSONClient {
    private config;
    private axios;
    constructor(config: StreetManagerGeoJSONClientConfig);
    isAvailable(): Promise<boolean>;
    getWorks(requestId: string, minEasting: number, minNorthing: number, maxEasting: number, maxNorthing: number): Promise<WorkResponse[]>;
    private httpHandler;
    private generateRequestConfig;
}
