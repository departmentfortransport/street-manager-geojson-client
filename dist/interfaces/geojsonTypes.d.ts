export declare enum FeatureCollectionType {
    FeatureCollection = "FeatureCollection"
}
export declare enum FeatureType {
    Feature = "Feature"
}
export declare enum GeoJSONCentrePointType {
    Point = "Point"
}
export interface GeoJSONResponse {
    type: FeatureCollectionType;
}
export interface GeoJSONFeature {
    type: FeatureType;
    geometry: GeoJSONGeometry;
}
export interface GeoJSONGeometry {
    type: GeoJSONFeatureType;
    coordinates: any[];
}
export declare enum GeoJSONFeatureType {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon"
}
export interface GeoJSONCentrePoint {
    type: GeoJSONCentrePointType;
    coordinates: number[];
}
