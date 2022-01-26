import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getFeatures1AnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '#features-1-badge_1', options: { duration: 500, origin: 'bottom', distance: '20px' } },
        { id: '#features-1-title_1', options: { duration: 550, origin: 'bottom', distance: '22px' } },
        { id: '#features-1-description_1', options: { duration: 600, origin: 'bottom', distance: '25px' } },
        { id: '.feature-tag', options: { duration: 650, origin: 'bottom', distance: '30px' } },
        { id: '#features-1-image_1', options: { duration: 700, origin: 'bottom', distance: '50px' } },
        { id: '#features-1-badge_2', options: { duration: 500, origin: 'bottom', distance: '20px' } },
        { id: '#features-1-title_2', options: { duration: 550, origin: 'bottom', distance: '20px' } },
        { id: '#features-1-description_2', options: { duration: 600, origin: 'bottom', distance: '20px' } },
        { id: '.features-check', options: { duration: 650, origin: 'bottom', distance: '20px' } },
        { id: '#features-1-image_2', options: { duration: 700, origin: 'bottom', distance: '20px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}