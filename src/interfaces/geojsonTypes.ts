export enum FeatureCollectionType {
  FeatureCollection = 'FeatureCollection'
}

export enum FeatureType {
  Feature = 'Feature'
}

export enum GeoJSONCentrePointType {
  Point = 'Point'
}

export enum GeoJSONFeatureTypeResponse {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  upcoming_enum = 'upcoming_enum'
}

export interface GeoJSONResponse {
  type: FeatureCollectionType
}

export interface GeoJSONFeature {
  type: FeatureType
  /** GeoJSON Geometry */
  geometry: GeoJSONGeometry
}

export interface GeoJSONGeometry {
  type: GeoJSONFeatureTypeResponse
  type_string: string
  coordinates: any[]
}

export interface GeoJSONCentrePoint {
  type: GeoJSONCentrePointType
  coordinates: number[]
}
