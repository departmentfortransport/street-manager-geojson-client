import { ForwardPlanStatus } from './referenceTypes';
export interface ForwardPlanResponse {
    forward_plan_reference_number: string;
    work_reference_number: string;
    forward_plan_status: ForwardPlanStatus;
    work_centre_point: string;
    work_coordinates: string;
    street: string;
    area?: string;
    start_date: Date;
    end_date: Date;
    description_of_work: string;
}
