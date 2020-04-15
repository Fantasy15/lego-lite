/**
 * @file getScroll.js
 */

export default function(target, top) {
    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let num = isWindow ? target[prop] : target[method];

    return num;
}