export declare type FeatureCollectionType = 'FeatureCollection';
export declare type FeatureType = 'Feature';
export declare type GeoJSONCentrePointType = 'Point';
export declare type GeoJSONCentrePointCoordinates = [number, number];
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
    coordinates: GeoJSONCentrePointCoordinates;
}
