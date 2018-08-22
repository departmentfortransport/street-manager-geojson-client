import { WorkCategory, TrafficManagementType } from './referenceTypes';
export interface WorkResponse {
    permit_id: number;
    promoter_name: string;
    work_category: WorkCategory;
    start_date: Date;
    end_date: Date;
    traffic_management_type: TrafficManagementType;
}
