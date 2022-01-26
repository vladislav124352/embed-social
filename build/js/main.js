import { getHeroAnimatedElements } from './sections/hero/getHeroAnimatedElements.js';
import { getAboutAnimatedElements } from './sections/about/getAboutAnimatedElements.js';
import { setHeaderAnimations } from './sections/header/setHeaderAnimations.js';
import { getBenefits1AnimatedElements } from './sections/benefits-1/getBenefits1AnimatedElements.js';
import { getBenefits2AnimatedElements } from './sections/benefits-2/getbenefits2AnimatedElements.js';
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