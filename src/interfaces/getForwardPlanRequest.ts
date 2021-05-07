import { GeojsonRequest } from './geojsonRequest'

export interface GetForwardPlanRequest extends GeojsonRequest {
  forward_plan_reference_number?: string | null
}
