import { WorkCategory, TrafficManagementType, PermitStatus } from './referenceTypes';
export interface WorkResponse {
    reference_number: string;
    promoter_organisation: string;
    promoter_swa_code: string;
    work_category: WorkCategory;
    start_date: Date;
    end_date: Date;
    traffic_management_type: TrafficManagementType;
    work_centre_point: any;
    permit_status: PermitStatus;
}
