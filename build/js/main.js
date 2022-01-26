import { getHeroAnimatedElements } from './sections/hero/getHeroAnimatedElements.js';
import { getAboutAnimatedElements } from './sections/about/getAboutAnimatedElements.js';
import { setHeaderAnimations } from './sections/header/setHeaderAnimations.js';
import PageSection from './pageSection.js';

window.addEventListener('DOMContentLoaded', () => {
    class App {
        #appSections = [];

        constructor() {
            this.#appSections = [
                new PageSection(getHeroAnimatedElements),
                new PageSection(getAboutAnimatedElements),
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