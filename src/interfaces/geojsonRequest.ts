import { BaseGeojsonRequest } from './baseGeojsonRequest'

export interface GeojsonRequest extends BaseGeojsonRequest   {
  start_date?: Date
  end_date?: Date
}
