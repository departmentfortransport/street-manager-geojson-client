"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted_proposed"] = "granted_proposed";
    PermitStatus["granted_with_changes"] = "granted_with_changes";
    PermitStatus["refused"] = "refused";
    PermitStatus["granted_in_progress"] = "granted_in_progress";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked_proposed"] = "revoked_proposed";
    PermitStatus["revoked_in_progress"] = "revoked_in_progress";
    PermitStatus["deemed_proposed"] = "deemed_proposed";
    PermitStatus["deemed_in_progress"] = "deemed_in_progress";
    PermitStatus["granted_auto"] = "granted_auto";
    PermitStatus["refused_auto"] = "refused_auto";
    PermitStatus["cancelled_auto"] = "cancelled_auto";
    PermitStatus["awaiting_assessment_in_progress"] = "awaiting_assessment_in_progress";
    PermitStatus["revoked_closed"] = "revoked_closed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
var TrafficManagementType;
(function (TrafficManagementType) {
    TrafficManagementType["road_closure"] = "road_closure";
    TrafficManagementType["contra_flow"] = "contra_flow";
    TrafficManagementType["lane_closure"] = "lane_closure";
    TrafficManagementType["multi_way_signals"] = "multi_way_signals";
    TrafficManagementType["two_way_signals"] = "two_way_signals";
    TrafficManagementType["convoy_workings"] = "convoy_workings";
    TrafficManagementType["stop_go_boards"] = "stop_go_boards";
    TrafficManagementType["priority_working"] = "priority_working";
    TrafficManagementType["give_and_take"] = "give_and_take";
    TrafficManagementType["some_carriageway_incursion"] = "some_carriageway_incursion";
    TrafficManagementType["no_carriageway_incursion"] = "no_carriageway_incursion";
})(TrafficManagementType = exports.TrafficManagementType || (exports.TrafficManagementType = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
    WorkCategory["paa"] = "paa";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var ActivityActivityType;
(function (ActivityActivityType) {
    ActivityActivityType["skips"] = "skips";
    ActivityActivityType["scaffolding"] = "scaffolding";
    ActivityActivityType["hoarding"] = "hoarding";
    ActivityActivityType["crane_mobile_platform"] = "crane_mobile_platform";
    ActivityActivityType["event"] = "event";
    ActivityActivityType["section50"] = "section50";
    ActivityActivityType["section58"] = "section58";
    ActivityActivityType["compound"] = "compound";
    ActivityActivityType["other"] = "other";
})(ActivityActivityType = exports.ActivityActivityType || (exports.ActivityActivityType = {}));
var ForwardPlanStatus;
(function (ForwardPlanStatus) {
    ForwardPlanStatus["raised"] = "raised";
    ForwardPlanStatus["cancelled"] = "cancelled";
    ForwardPlanStatus["closed"] = "closed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var RefForwardPlanStatus;
(function (RefForwardPlanStatus) {
    RefForwardPlanStatus[RefForwardPlanStatus["raised"] = 1] = "raised";
    RefForwardPlanStatus[RefForwardPlanStatus["cancelled"] = 2] = "cancelled";
    RefForwardPlanStatus[RefForwardPlanStatus["closed"] = 3] = "closed";
})(RefForwardPlanStatus = exports.RefForwardPlanStatus || (exports.RefForwardPlanStatus = {}));
