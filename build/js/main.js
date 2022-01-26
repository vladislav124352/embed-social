import { getHeroAnimatedElements } from './sections/hero/getHeroAnimatedElements.js';
import { setHeaderAnimations } from './sections/header/setHeaderAnimations.js';
import PageSection from './pageSection.js';

window.addEventListener('DOMContentLoaded', () => {
    class App {
        #appSections = [];

        constructor() {
            this.#appSections = [
                new PageSection(getHeroAnimatedElements),
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