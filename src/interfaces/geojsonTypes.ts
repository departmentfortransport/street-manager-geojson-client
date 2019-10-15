export enum FeatureCollectionType {
  FeatureCollection = 'FeatureCollection'
}

export enum FeatureType {
  Feature = 'Feature'
}

export enum GeoJSONCentrePointType {
  Point = 'Point'
}

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
  coordinates: number[]
}
