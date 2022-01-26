export const getAnimatedElementsWithDefaultOptions = (animatedElements, defaultOptionsForElements) => {
    return animatedElements.map((animatedElement) => {
        return {
            ...animatedElement,
            options: {
                ...animatedElement.options,
                ...defaultOptionsForElements
            }
        };
    })
}