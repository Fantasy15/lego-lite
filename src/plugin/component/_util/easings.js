/**
 * @file easings.js
 * @param {*} t time
 * @param {*} s scrollTop
 * @param {*} y y
 * @param {*} d duration
 */

function easeInOutCubic(t, s, y, d) {
    const cc = y - s;
    t /= d / 2;
    if (t < 1) {
        return (cc / 2) * t * t * t + s;
    }
    return (cc / 2) * ((t -= 2) * t * t + 2) + s;
}

export {
    easeInOutCubic
}
