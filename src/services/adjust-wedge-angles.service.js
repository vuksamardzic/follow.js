export let adjustWedgeAngles = (start, end, part360) => {
    start = end;
    end -= part360;

    if (end < -180) {
        end = -start;
    } else if (end === -180) {
        end = 180;
    }
    return [start, end];
}
