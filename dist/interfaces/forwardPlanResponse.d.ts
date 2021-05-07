import { ForwardPlanStatusResponse } from './referenceTypes';
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
    forward_plan_status: ForwardPlanStatusResponse;
    forward_plan_status_string: string;
    /** GeoJSON Point Geometry */
    work_centre_point: GeoJSONCentrePoint;
    street: string;
    area?: string | null;
    start_date: Date;
    end_date: Date;
    description_of_work: string;
    promoter_organisation: string;
    location_description: string;
}
