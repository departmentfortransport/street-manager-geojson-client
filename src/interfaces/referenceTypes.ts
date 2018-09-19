export enum PermitStatus {
    submitted = 'submitted',
    granted_proposed = 'granted_proposed',
    granted_with_changes = 'granted_with_changes',
    refused = 'refused',
    granted_in_progress = 'granted_in_progress',
    closed = 'closed',
    cancelled = 'cancelled',
    revoked_proposed = 'revoked_proposed',
    revoked_in_progress = 'revoked_in_progress',
    deemed_proposed = 'deemed_proposed',
    deemed_in_progress = 'deemed_in_progress'
}

export enum TrafficManagementType {
    road_closure = 'road_closure',
    contra_flow = 'contra_flow',
    lane_closure = 'lane_closure',
    multi_way_signals = 'multi_way_signals',
    two_way_signals = 'two_way_signals',
    convoy_workings = 'convoy_workings',
    stop_go_boards = 'stop_go_boards',
    priority_working = 'priority_working',
    give_and_take = 'give_and_take',
    some_carriageway_incursion = 'some_carriageway_incursion',
    no_carriageway_incursion = 'no_carriageway_incursion'
}

export enum WorkCategory {
    minor = 'minor',
    standard = 'standard',
    major = 'major',
    immediate_urgent = 'immediate_urgent',
    immediate_emergency = 'immediate_emergency'
}
