import { settings } from "../models/settings.model";

export let handleType = (el, val) => {
    if ( typeof val === 'boolean' ) {
        if ( settings.type === 'text' ) {
            if ( el.innerText !== settings.default ) {
                el.innerText = settings.default;
            }
        } else if ( settings.type === 'style' ) {
            if ( el[settings.type][settings.prop] !== settings.default ) {
                el[settings.type][settings.prop] = settings.default;
            }
        }
    } else {
        if ( settings.type === 'text' ) {
            if ( el.innerText !== val ) {
                el.innerText = val;
            }
        } else if ( settings.type === 'style' ) {
            if ( el[settings.type][settings.prop] !== val ) {
                el[settings.type][settings.prop] = val;
            }
        }
    }
}
