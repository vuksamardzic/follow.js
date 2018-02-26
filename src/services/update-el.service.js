import { getCenterPoint } from "./el-center.service";
import { defaults } from "../models/defaults.model";
import { propertyUpdateCondition } from "./property-update-condition.service";
import { checkIfOverElement } from "./check-if-over-el.service";
import { handleType } from "./handle-type.service";

export let updateEl = (el, ev) => {

    const mousePoint = {
        x: ev.pageX,
        y: ev.pageY
    };

    const overEl = checkIfOverElement(el, mousePoint);

    if ( overEl ) {
        handleType(el, overEl);
    } else if ( !overEl ) {
        const elCenterPoint = getCenterPoint(el, overEl);
        const mouseToElAngle = Math.atan2(ev.pageY - elCenterPoint.y, ev.pageX - elCenterPoint.x) * 180 / Math.PI;
        propertyUpdateCondition(el, mouseToElAngle);
    }
}
