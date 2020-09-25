import { ActivityActivityTypeResponse } from './referenceTypes'
import { GeoJSONResponse, GeoJSONFeature, GeoJSONCentrePoint } from './geojsonTypes'

export interface ActivityResponse extends GeoJSONResponse {
  features: ActivityFeature[]
}

export interface ActivityFeature extends GeoJSONFeature {
  properties: ActivityProperties
}

export interface ActivityProperties {
  /** GeoJSON Point Geometry */
  activity_centre_point: GeoJSONCentrePoint
  activity_name: string
  activity_location_description: string
  activity_reference_number: string
  activity_type: ActivityActivityTypeResponse
  area_name: string
  cancelled: boolean
  end_date: Date
  street_name: string
  start_date: Date
}
