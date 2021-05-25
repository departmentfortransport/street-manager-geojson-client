import { BaseGeojsonRequest } from './baseGeojsonRequest'

export interface GeojsonRequest extends BaseGeojsonRequest {
  start_date?: null | Date
  end_date?: null | Date
}
