import { getHeroAnimatedElements } from './sections/hero/getHeroAnimatedElements.js';
import { getAboutAnimatedElements } from './sections/about/getAboutAnimatedElements.js';
import { setHeaderAnimations } from './sections/header/setHeaderAnimations.js';
import { getBenefits1AnimatedElements } from './sections/benefits-1/getBenefits1AnimatedElements.js';
import { getBenefits2AnimatedElements } from './sections/benefits-2/getbenefits2AnimatedElements.js';
import { getFeatures1AnimatedElements } from './sections/features-1/getFeatures1AnimatedElements.js';
import { getFeatures2AnimatedElements } from './sections/features-2/getFeatures2AnimatedElements.js';
import { getFeatures3AnimatedElements } from './sections/features-3/getFeatures3AnimatedElements.js';
import { getPricingAnimatedElements } from './sections/pricing/getPricinigAnimatedElements.js';
import PageSection from './pageSection.js';

window.addEventListener('DOMContentLoaded', () => {
    class App {
        #appSections = [];

        constructor() {
            this.#appSections = [
                new PageSection(getHeroAnimatedElements),
                new PageSection(getAboutAnimatedElements),
                new PageSection(getBenefits1AnimatedElements),
                new PageSection(getBenefits2AnimatedElements),
                new PageSection(getFeatures1AnimatedElements),
                new PageSection(getFeatures2AnimatedElements),
                new PageSection(getFeatures3AnimatedElements),
                new PageSection(getPricingAnimatedElements),
            ]
        }

        #setSectionsAnimations() {
            this.#appSections.forEach((section) => section.setScrollAnimations())
        }

        run() {
            setHeaderAnimations();
            this.#setSectionsAnimations()
        }
    }

    const app = new App();
    app.run();
})