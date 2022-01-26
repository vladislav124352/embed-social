import { getAnimatedElementsWithDefaultOptions } from "../getAnimatedElementsWithDefaultOptions.js";

export const getHeroAnimatedElements = () => {
    const defaultOptions = { scale: 0.95, delay: 200 }
    const animatedElements = [
        { id: '#hero-title', options: { duration: 800, origin: 'left', distance: '50px' } },
        { id: '#hero-description', options: { duration: 900, origin: 'left', distance: '80px' } },
        { id: '#hero-form', options: { duration: 1000, origin: 'left', distance: '100px' } },
        { id: '#hero-form_comment', options: { duration: 1100, origin: 'left', distance: '120px' } },
        { id: '#hero-embed_social_profile', options: { duration: 1000, origin: 'bottom', distance: '80px' } },
        { id: '#hero-instagram', options: { duration: 1200, origin: 'bottom', distance: '100px' } },
        { id: '#hero-story_1', options: { duration: 1000, origin: 'bottom', distance: '50px' } },
        { id: '#hero-story_2', options: { duration: 900, origin: 'top', distance: '100px' } },
        { id: '#hero-story_3', options: { duration: 800, origin: 'top', distance: '50px' } },
        { id: '#hero-partners', options: { duration: 1000, origin: 'bottom', distance: '20px' } }
    ]

    return getAnimatedElementsWithDefaultOptions(animatedElements, defaultOptions);
}