export interface StreetManagerGeoJSONClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerGeoJSONClient {
    private config;
    private axios;
    constructor(config: StreetManagerGeoJSONClientConfig);
    isAvailable(): Promise<boolean>;
}
