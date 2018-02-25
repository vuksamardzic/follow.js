export let checkIfOverElement = (el, mouse) => {
    let obj = el.getBoundingClientRect();

    if ( obj.left <= mouse.x && obj.right >= mouse.x && obj.top <= mouse.y && obj.bottom >= mouse.y ) {
        return true;
    }
    return false;
}
