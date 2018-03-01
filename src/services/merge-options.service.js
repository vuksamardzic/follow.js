import { defaults } from "../models/defaults.model";
import { followEl } from "./cache-dom.service";
import { followElArray } from "../models/follow-el.model";
import { handleType } from "./handle-type.service";

export let mergeOptions = (options) => {
    if (typeof options === 'string') {
        defaults.selector = options;
        Array.from(followEl(defaults.selector)).map(el => {
            handleType(el, true);            
            followElArray.push(el);
        });
    } else if (typeof options === 'object') {
        Object.assign(defaults, options);
        Array.from(followEl(defaults.selector)).map(el => {
            followElArray.push(el);
            handleType(el, true);
        });
    } else if (typeof options === undefined) {
        Array.from(followEl(defaults.selector)).map(el => {
            handleType(el, true);
            followElArray.push(el);
        });
    }
}