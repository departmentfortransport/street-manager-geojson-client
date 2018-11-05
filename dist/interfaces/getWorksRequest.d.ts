export interface GetWorksRequest {
    minEasting: number;
    minNorthing: number;
    maxEasting: number;
    maxNorthing: number;
    start_date?: Date;
    end_date?: Date;
}
