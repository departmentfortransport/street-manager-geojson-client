import { ForwardPlanStatus } from './referenceTypes';
import { GeoJSONResponse, GeoJSONFeature, GeoJSONCentrePoint } from './geojsonTypes';
export interface ForwardPlanResponse extends GeoJSONResponse {
    features: ForwardPlanFeature[];
}
export interface ForwardPlanFeature extends GeoJSONFeature {
    properties: ForwardPlanProperties;
}
export interface ForwardPlanProperties {
    forward_plan_reference_number: string;
    work_reference_number: string;
    forward_plan_status: ForwardPlanStatus;
    work_centre_point: GeoJSONCentrePoint;
    street: string;
    area?: string;
    start_date: Date;
    end_date: Date;
    description_of_work: string;
    promoter_organisation: string;
    location_description: string;
}
