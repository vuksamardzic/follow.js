import { followElArray } from "../models/follow-el.model";
import { updateEl } from "../services/update-el.service";

export let mouseMoveHandler = (ev) => {
    followElArray.map(el => {
        updateEl(el, ev);
    });
}
