import { defaults } from "../models/defaults.model";
import { adjustWedgeAngles } from "./adjust-wedge-angles.service";
import { handleType } from "./handle-type.service";

export let propertyUpdateCondition = (el, mouseToElAngle) => {
    const part180 = 180 / defaults.areas;
    const part360 = 360 / defaults.areas;
    let wedgeAngleStart = part180;
    let wedgeAngleEnd = -part180;

    for (let i = 0; i < defaults.areas; i++) {
        if (wedgeAngleStart > mouseToElAngle && wedgeAngleEnd < mouseToElAngle) {
            handleType(el, defaults.feed[i]);
        } else if (wedgeAngleStart < 0 && wedgeAngleEnd > 0 && (mouseToElAngle > wedgeAngleEnd || mouseToElAngle < wedgeAngleStart)) {
            handleType(el, defaults.feed[i]);
        }

        [wedgeAngleStart, wedgeAngleEnd] = adjustWedgeAngles(wedgeAngleStart, wedgeAngleEnd, part360);
    }
}