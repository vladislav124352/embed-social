import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getFeatures3AnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '.feature-card', options: { duration: 1000, origin: 'bottom', distance: '20px' } }
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}