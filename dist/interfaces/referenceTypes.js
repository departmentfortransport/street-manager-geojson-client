"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted"] = "granted";
    PermitStatus["permit_modification_request"] = "permit_modification_request";
    PermitStatus["refused"] = "refused";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked"] = "revoked";
    PermitStatus["progressed"] = "progressed";
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
    ForwardPlanStatus["progressed"] = "progressed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var Role;
(function (Role) {
    Role["Planner"] = "Planner";
    Role["HighwayAuthority"] = "HighwayAuthority";
    Role["Admin"] = "Admin";
    Role["Contractor"] = "Contractor";
    Role["API"] = "API";
    Role["UI"] = "UI";
    Role["DataExport"] = "DataExport";
})(Role = exports.Role || (exports.Role = {}));
