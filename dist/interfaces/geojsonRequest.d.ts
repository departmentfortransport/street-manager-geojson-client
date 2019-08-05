export interface GeojsonRequest {
    minEasting: number;
    minNorthing: number;
    maxEasting: number;
    maxNorthing: number;
    start_date?: Date;
    end_date?: Date;
}
