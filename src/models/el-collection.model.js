import { handleType } from "../services/handle-type.service";

export let elCollection = [];
export const collectionClean = () => {
    elCollection.map(el => {
        el.hasAttribute('style') ? el.removeAttribute('style') : '';
        el.innerText = '';
    });
    elCollection = [];
}
export const collectionAssign = (arr) => {
    elCollection = Array.from(arr);
    elCollection.map(el => {
        handleType(el, true);
    });
}
