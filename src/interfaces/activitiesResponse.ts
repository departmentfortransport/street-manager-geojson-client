import { ActivityActivityType } from './referenceTypes'

export interface ActivityResponse {
  activity_centre_point: string // JSON string
  activity_coordinates: string // JSON string
  activity_name: string
  activity_location_description: string
  activity_reference_number: string
  activity_type: ActivityActivityType
  area_name: string
  cancelled: boolean
  end_date: Date
  street_name: string
  start_date: Date
}
