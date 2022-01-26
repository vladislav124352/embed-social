import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getPricingAnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '#pricing-title', options: { duration: 1000, origin: 'bottom', distance: '20px' } },
        { id: '#pricing-description', options: { duration: 1000, origin: 'bottom', distance: '40px' } },
        { id: '#pricing-button_group', options: { duration: 500 } },
        { id: '.price-card', options: { duration: 700 } },
        { id: '#pricing-questions_title', options: { duration: 700 } },
        { id: '#pricing-question_description', options: { duration: 700 } },
        { id: '.pricing-question', options: { duration: 700, origin: 'right', distance: '40px' } },
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}