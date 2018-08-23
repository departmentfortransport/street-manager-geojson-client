import { WorkCategory, TrafficManagementType } from './referenceTypes';
export interface WorkResponse {
    permit_id: number;
    promoter_organisation: string;
    promoter_swa_code: string;
    work_category: WorkCategory;
    start_date: Date;
    end_date: Date;
    traffic_management_type: TrafficManagementType;
}
