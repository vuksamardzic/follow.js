import { defaults } from "../models/defaults.model";

let array = [
    'right',
    'top-right',
    'top',
    'top-left',
    'left',
    'bottom-left',
    'bottom',
    'bottom-right'
];

export let propertyUpdateCondition = (el, evAngle, elAngle) => {
    let intervalI = elAngle;
    let intervalII = elAngle - elAngle * 2;

    for (let i = 0; i < defaults.areas; i++) {

        if (!(intervalI < 0 && intervalII > 0)) {
            if (evAngle < intervalI && evAngle > intervalII) {
                el.innerHTML = array[i];
            }
        } else {
            if (evAngle > intervalII || evAngle < intervalI) {
                el.innerHTML = array[i];
            }
        }

        intervalI = intervalII;
        intervalII -= elAngle * 2;

        if (intervalII < -180) {
            intervalII = -intervalI;
        }
    }
}