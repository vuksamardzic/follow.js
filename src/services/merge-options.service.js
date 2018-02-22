import { defaults } from "../models/defaults.model";
import { followEl } from "./cache-dom.service";
import { followElArray } from "../models/follow-el.model";

export let mergeOptions = (options) => {
    if (typeof options === 'string') {
        defaults.selector = options;
        Array.from(followEl(defaults.selector)).map(i => followElArray.push(i));
    } else if (typeof options === 'object') {
        Object.assign(defaults, options);
        Array.from(followEl(defaults.selector)).map(i => followElArray.push(i)); 
    } else if (typeof options === undefined) {
        Array.from(followEl(defaults.selector)).map(i => followElArray.push(i));
    }
}
