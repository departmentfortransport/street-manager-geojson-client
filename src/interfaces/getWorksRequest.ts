import { GeojsonRequest } from './geojsonRequest'

export interface GetWorksRequest extends GeojsonRequest {
  work_reference_number?: string | null
}
