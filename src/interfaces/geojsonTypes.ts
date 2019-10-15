export interface GeoJSONResponse {
  type: 'FeatureCollection'
}

export interface GeoJSONFeature {
  type: 'Feature'
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
  type: GeoJSONFeatureType.Point
  coordinates: [number, number]
}
