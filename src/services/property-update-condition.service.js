import { settings } from "../models/settings.model";
import { adjustWedgeAngles } from "./adjust-wedge-angles.service";
import { handleType } from "./handle-type.service";

export let propertyUpdateCondition = (el, mouseToElAngle) => {
    const part180 = 180 / settings.areas;
    const part360 = 360 / settings.areas;
    let wedgeAngleStart = part180;
    let wedgeAngleEnd = -part180;

    for (let i = 0; i < settings.areas; i++) {
        if (wedgeAngleStart > mouseToElAngle && wedgeAngleEnd < mouseToElAngle) {
            handleType(el, settings.feed[i]);
        } else if (wedgeAngleStart < 0 && wedgeAngleEnd > 0 && (mouseToElAngle > wedgeAngleEnd || mouseToElAngle < wedgeAngleStart)) {
            handleType(el, settings.feed[i]);
        }

        [wedgeAngleStart, wedgeAngleEnd] = adjustWedgeAngles(wedgeAngleStart, wedgeAngleEnd, part360);
    }
}
