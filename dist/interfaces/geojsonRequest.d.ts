import { BaseGeojsonRequest } from './baseGeojsonRequest';
export interface GeojsonRequest extends BaseGeojsonRequest {
    start_date?: Date | null;
    end_date?: Date | null;
}
