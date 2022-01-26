import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getAboutAnimatedElements = () => {
    const defaultOptions = { delay: 200 }
    const animatedElements = [
        { id: '#about-screen_image', options: { duration: 800, origin: 'left', distance: '20px' } },
        { id: '#about-title', options: { duration: 300, origin: 'right', distance: '20px' } },
        { id: '.about-widget_item', options: { duration: 500, origin: 'right', distance: '20px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}
