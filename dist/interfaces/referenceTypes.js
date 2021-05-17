"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatusResponse;
(function (PermitStatusResponse) {
    PermitStatusResponse["submitted"] = "submitted";
    PermitStatusResponse["granted"] = "granted";
    PermitStatusResponse["permit_modification_request"] = "permit_modification_request";
    PermitStatusResponse["refused"] = "refused";
    PermitStatusResponse["closed"] = "closed";
    PermitStatusResponse["cancelled"] = "cancelled";
    PermitStatusResponse["revoked"] = "revoked";
    PermitStatusResponse["progressed"] = "progressed";
    PermitStatusResponse["upcoming_enum"] = "upcoming_enum";
})(PermitStatusResponse = exports.PermitStatusResponse || (exports.PermitStatusResponse = {}));
var TrafficManagementTypeResponse;
(function (TrafficManagementTypeResponse) {
    TrafficManagementTypeResponse["road_closure"] = "road_closure";
    TrafficManagementTypeResponse["contra_flow"] = "contra_flow";
    TrafficManagementTypeResponse["lane_closure"] = "lane_closure";
    TrafficManagementTypeResponse["multi_way_signals"] = "multi_way_signals";
    TrafficManagementTypeResponse["two_way_signals"] = "two_way_signals";
    TrafficManagementTypeResponse["convoy_workings"] = "convoy_workings";
    TrafficManagementTypeResponse["stop_go_boards"] = "stop_go_boards";
    TrafficManagementTypeResponse["priority_working"] = "priority_working";
    TrafficManagementTypeResponse["give_and_take"] = "give_and_take";
    TrafficManagementTypeResponse["some_carriageway_incursion"] = "some_carriageway_incursion";
    TrafficManagementTypeResponse["no_carriageway_incursion"] = "no_carriageway_incursion";
    TrafficManagementTypeResponse["upcoming_enum"] = "upcoming_enum";
})(TrafficManagementTypeResponse = exports.TrafficManagementTypeResponse || (exports.TrafficManagementTypeResponse = {}));
var WorkCategoryResponse;
(function (WorkCategoryResponse) {
    WorkCategoryResponse["minor"] = "minor";
    WorkCategoryResponse["standard"] = "standard";
    WorkCategoryResponse["major"] = "major";
    WorkCategoryResponse["immediate_urgent"] = "immediate_urgent";
    WorkCategoryResponse["immediate_emergency"] = "immediate_emergency";
    WorkCategoryResponse["paa"] = "paa";
    WorkCategoryResponse["hs2_highway"] = "hs2_highway";
    WorkCategoryResponse["upcoming_enum"] = "upcoming_enum";
})(WorkCategoryResponse = exports.WorkCategoryResponse || (exports.WorkCategoryResponse = {}));
var ActivityActivityTypeResponse;
(function (ActivityActivityTypeResponse) {
    ActivityActivityTypeResponse["skips"] = "skips";
    ActivityActivityTypeResponse["scaffolding"] = "scaffolding";
    ActivityActivityTypeResponse["hoarding"] = "hoarding";
    ActivityActivityTypeResponse["crane_mobile_platform"] = "crane_mobile_platform";
    ActivityActivityTypeResponse["event"] = "event";
    ActivityActivityTypeResponse["section50"] = "section50";
    ActivityActivityTypeResponse["section58"] = "section58";
    ActivityActivityTypeResponse["compound"] = "compound";
    ActivityActivityTypeResponse["other"] = "other";
    ActivityActivityTypeResponse["upcoming_enum"] = "upcoming_enum";
})(ActivityActivityTypeResponse = exports.ActivityActivityTypeResponse || (exports.ActivityActivityTypeResponse = {}));
var ForwardPlanStatusResponse;
(function (ForwardPlanStatusResponse) {
    ForwardPlanStatusResponse["raised"] = "raised";
    ForwardPlanStatusResponse["cancelled"] = "cancelled";
    ForwardPlanStatusResponse["progressed"] = "progressed";
    ForwardPlanStatusResponse["upcoming_enum"] = "upcoming_enum";
})(ForwardPlanStatusResponse = exports.ForwardPlanStatusResponse || (exports.ForwardPlanStatusResponse = {}));
var Hs2ActLimitPhase;
(function (Hs2ActLimitPhase) {
    Hs2ActLimitPhase["phase_1"] = "phase_1";
    Hs2ActLimitPhase["phase_2a"] = "phase_2a";
})(Hs2ActLimitPhase = exports.Hs2ActLimitPhase || (exports.Hs2ActLimitPhase = {}));
