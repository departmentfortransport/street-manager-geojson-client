import { GeojsonRequest } from './geojsonRequest';
export interface GetForwardPlanRequest extends GeojsonRequest {
    work_reference_number: string;
    forward_plan_reference_number: string;
}
