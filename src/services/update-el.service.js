import { getCenterPoint } from "./el-center.service";
import { defaults } from "../models/defaults.model";
import { propertyUpdateCondition } from "./property-update-condition.service";

export let updateEl = (el, ev) => {
    let elCenterPoint = getCenterPoint(el);
    let elAngle = Math.atan2(ev.pageY - elCenterPoint.y, ev.pageX - elCenterPoint.x) * 180 / Math.PI;
    let elAngleSegment = 180 / defaults.areas;

    propertyUpdateCondition(el, elAngle, elAngleSegment);
}
