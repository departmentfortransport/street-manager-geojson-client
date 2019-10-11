export declare enum PermitStatus {
    submitted = "submitted",
    granted_proposed = "granted_proposed",
    permit_modification_request = "Permit modification request",
    refused = "refused",
    granted_in_progress = "granted_in_progress",
    closed = "closed",
    cancelled = "cancelled",
    revoked_proposed = "revoked_proposed",
    revoked_in_progress = "revoked_in_progress",
    deemed_proposed = "deemed_proposed",
    deemed_in_progress = "deemed_in_progress",
    granted_auto = "granted_auto",
    refused_auto = "refused_auto",
    cancelled_auto = "cancelled_auto",
    awaiting_assessment_in_progress = "awaiting_assessment_in_progress",
    revoked_closed = "revoked_closed",
    deemed_closed = "deemed_closed"
}
export declare enum TrafficManagementType {
    road_closure = "road_closure",
    contra_flow = "contra_flow",
    lane_closure = "lane_closure",
    multi_way_signals = "multi_way_signals",
    two_way_signals = "two_way_signals",
    convoy_workings = "convoy_workings",
    stop_go_boards = "stop_go_boards",
    priority_working = "priority_working",
    give_and_take = "give_and_take",
    some_carriageway_incursion = "some_carriageway_incursion",
    no_carriageway_incursion = "no_carriageway_incursion"
}
export declare enum WorkCategory {
    minor = "minor",
    standard = "standard",
    major = "major",
    immediate_urgent = "immediate_urgent",
    immediate_emergency = "immediate_emergency",
    paa = "paa"
}
export declare enum ActivityActivityType {
    skips = "skips",
    scaffolding = "scaffolding",
    hoarding = "hoarding",
    crane_mobile_platform = "crane_mobile_platform",
    event = "event",
    section50 = "section50",
    section58 = "section58",
    compound = "compound",
    other = "other"
}
export declare enum ForwardPlanStatus {
    raised = "raised",
    cancelled = "cancelled",
    closed = "closed"
}
export declare enum RefForwardPlanStatus {
    raised = 1,
    cancelled = 2,
    closed = 3
}
