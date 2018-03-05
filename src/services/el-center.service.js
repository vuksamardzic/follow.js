export let getCenterPoint = (data) => {
    let points = data.getBoundingClientRect();
    return {
        x: (points.left + points.right) / 2,
        y: (points.bottom + points.top) / 2
    };
}
