import { defaults } from "../models/defaults.model";

export let handleType = (el, val) => {
    if ( typeof val === 'boolean' ) {
        if ( defaults.type === 'text' ) {
            if ( el.innerText !== defaults.default ) {
                el.innerText = defaults.default;
            }
        } else if ( defaults.type === 'style' ) {
            if ( el[defaults.type][defaults.prop] !== defaults.default ) {
                el[defaults.type][defaults.prop] = defaults.default;
            }
        }
    } else {
        if ( defaults.type === 'text' ) {
            if ( el.innerText !== val ) {
                el.innerText = val;
            }
        } else if ( defaults.type === 'style' ) {
            if ( el[defaults.type][defaults.prop] !== val ) {
                el[defaults.type][defaults.prop] = val;
            }
        }
    }
}
