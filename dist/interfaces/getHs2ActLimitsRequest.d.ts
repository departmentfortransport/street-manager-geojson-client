import { BaseGeojsonRequest } from './baseGeojsonRequest';
import { Hs2ActLimitPhase } from './referenceTypes';
export interface GetHs2ActLimitsRequest extends BaseGeojsonRequest {
    phase?: Hs2ActLimitPhase;
}
