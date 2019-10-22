import { WorkCategory, TrafficManagementType, PermitStatus, } from './referenceTypes'
import { GeoJSONResponse, GeoJSONFeature, GeoJSONCentrePoint } from './geojsonTypes'

export interface WorkResponse extends GeoJSONResponse {
  features: WorkFeature[]
}

export interface WorkFeature extends GeoJSONFeature {
  properties: WorkProperties
}

export interface WorkProperties {
  work_reference_number: string
  permit_reference_number: string
  promoter_organisation: string
  promoter_swa_code: string
  work_category: WorkCategory
  start_date: Date
  end_date: Date
  traffic_management_type: TrafficManagementType
  /** GeoJSON Point Geometry */
  work_centre_point: GeoJSONCentrePoint
  permit_status: PermitStatus
}
