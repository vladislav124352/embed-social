import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getBenefits1AnimatedElements = () => {
    const defaultOptions = { delay: 200 };
    const animatedElements = [
        { id: '.benefits-social', options: { duration: 500 } }
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}