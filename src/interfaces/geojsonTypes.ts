export type FeatureCollectionType = 'FeatureCollection'

export type FeatureType = 'Feature'

export type GeoJSONCentrePointType = 'Point'
export type GeoJSONCentrePointCoordinates = [number, number]

export interface GeoJSONResponse {
  type: FeatureCollectionType
}
export interface GeoJSONFeature {
  type: FeatureType
  geometry: GeoJSONGeometry
}
export interface GeoJSONGeometry {
  type: GeoJSONFeatureType
  coordinates: any[]
}
export enum GeoJSONFeatureType {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon'
}
export interface GeoJSONCentrePoint {
  type: GeoJSONCentrePointType
  coordinates: GeoJSONCentrePointCoordinates
}
