/**
 * @file getOffset.js
 * @description 获取元素距离body的offset
 */

export default function (el) {
    let top = 0;
    let left = 0;

    let parent = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;

    while (parent) {
        top += parent.offsetTop;
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    return {left: left, top: top};
}