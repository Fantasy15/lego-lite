/**
 * @file scrollTo.js
 */

import raf from 'raf';
import getScroll from './getScroll';
import {easeInOutCubic} from './easings';

export default function scrollTo(y, options = {}) {
    const {el, cb, duration = 400} = options;

    const scrollTop = getScroll(el, true);
    const startTime = Date.now();

    const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const nextScrollTop = easeInOutCubic(
            time > duration ? duration : time,
            scrollTop,
            y,
            duration
        );

        if (el === window) {
            window.scrollTo(window.pageXOffset, nextScrollTop);
        } else {
            el.scrollTop = nextScrollTop;
        }

        if (time < duration) {
            raf(frameFunc);
        } else {
            cb && cb();
        }
    };
    raf(frameFunc);
}
