import { getAnimatedElementsWithDefaultOptions } from '../getAnimatedElementsWithDefaultOptions.js';

export const getBenefits2AnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '.benefits-advantage', options: { duration: 1000, origin: 'bottom', distance: '50px' } },
        { id: '#benefits-2-clovin', options: { duration: 800, origin: 'bottom', distance: '50px' } },
        { id: '#benefits-2-Ben_review_comment', options: { duration: 800, origin: 'bottom', distance: '50px' } },
        { id: '#benefits-2-Ben_review_photo', options: { duration: 900, origin: 'bottom', distance: '50px' } },
        { id: '#benefits-2-Ben_review_description', options: { duration: 1000, origin: 'bottom', distance: '50px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}