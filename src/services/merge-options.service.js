import { settings } from "../models/settings.model";
import { cacheDom } from "./cache-dom.service";
import { elCollection, collectionAssign, collectionClean } from "../models/el-collection.model";

export let mergeOptions = (options) => {
    if (typeof options === 'string') {
        settings.selector = options;
        if (elCollection.length > 0) {
            collectionClean();
        }
        collectionAssign(cacheDom(settings.selector));
    } else if (typeof options === 'object') {
        Object.assign(settings, options);
        if (elCollection.length > 0) {
            collectionClean();
        }
        collectionAssign(cacheDom(settings.selector));
    } else if (typeof options === undefined) {
        if (elCollection.length > 0) {
            collectionClean();
        }
        collectionAssign(cacheDom(settings.selector));
    }
}
