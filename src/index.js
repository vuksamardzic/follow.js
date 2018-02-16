let defaults = {
    selector: '.follow-el',
    areas: 8
};

export let init = ( options ) => {
    if ( typeof options === 'string' ) {
        defaults.selector = options
        console.log( defaults );
    } else if ( typeof options === 'object' ) {
        console.log( Object.assign(defaults, options) );
    }
}