import { getCenterPoint } from "./el-center.service";
import { propertyUpdateCondition } from "./property-update-condition.service";
import { checkIfOverElement } from "./check-if-over-el.service";
import { handleType } from "./handle-type.service";

export let updateEl = (el, ev) => {
    const mouseCoordinates = {
        x: ev.clientX,
        y: ev.clientY
    };
    const overEl = checkIfOverElement(el, mouseCoordinates);
    
    if ( overEl ) {
        handleType(el, overEl);
    } else if ( !overEl ) {
        const elCenterPoint = getCenterPoint(el, overEl);
        const mouseToElAngle = Math.atan2(mouseCoordinates.y - elCenterPoint.y, mouseCoordinates.x - elCenterPoint.x) * 180 / Math.PI;
        propertyUpdateCondition(el, mouseToElAngle);
    }
}
