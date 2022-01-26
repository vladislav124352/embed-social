import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getSocialProofAnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '#social-proof-title', options: { duration: 700, origin: 'bottom', distance: '20px' } },
        { id: '#social-proof-image', options: { duration: 1000, origin: 'bottom', distance: '40px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}