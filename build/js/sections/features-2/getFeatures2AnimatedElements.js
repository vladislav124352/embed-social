import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getFeatures2AnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '.features-2-check', options: { duration: 800, origin: 'bottom', distance: '30px' } },
        { id: '#features-2-title_1', options: { duration: 1000, origin: 'bottom', distance: '20px' } },

        { id: '#features-2-title_2', options: { duration: 700, origin: 'bottom', distance: '30px' } },
        { id: '#features-2-badge_1', options: { duration: 600, origin: 'bottom', distance: '50px' } },
        { id: '#features-2-image_1', options: { duration: 900, origin: 'top', distance: '50px' } },
        { id: '#features-2-image_2', options: { duration: 600, origin: 'top', distance: '60px' } },
        { id: '#features-2-shop_now', options: { duration: 700, origin: 'bottom', distance: '20px' } },

        { id: '#features-2-title_3', options: { duration: 1000, origin: 'bottom', distance: '20px' } },
        { id: '#features-2-badge_2', options: { duration: 600, origin: 'bottom', distance: '50px' } },
        { id: '#features-2-image_3', options: { duration: 900, origin: 'top', distance: '50px' } },
        { id: '#features-2-image_4', options: { duration: 600, origin: 'top', distance: '60px' } },
        { id: '#features-2-instagram', options: { duration: 700, origin: 'bottom', distance: '20px' } },

        { id: '#features-2-title_4', options: { duration: 700, origin: 'bottom', distance: '30px' } },
        { id: '#features-2-badge_3', options: { duration: 600, origin: 'bottom', distance: '50px' } },
        { id: '#features-2-image_5', options: { duration: 900, origin: 'top', distance: '50px' } },
        { id: '#features-2-image_6', options: { duration: 600, origin: 'top', distance: '60px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}