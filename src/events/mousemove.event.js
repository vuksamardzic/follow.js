import { elCollection } from "../models/el-collection.model";
import { updateEl } from "../services/update-el.service";

export let mouseMoveHandler = (ev) => {
    elCollection.map(el => {
        updateEl(el, ev);
    });
}
