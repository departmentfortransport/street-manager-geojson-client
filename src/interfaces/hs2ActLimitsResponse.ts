import { GeoJSONResponse, GeoJSONFeature } from './geojsonTypes'

export interface Hs2ActLimitsResponse extends GeoJSONResponse {
  features: Hs2ActLimitsFeature[]
}
export interface Hs2ActLimitsFeature extends GeoJSONFeature {
}
