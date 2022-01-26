export default class PageSection {
    #animatedElements = [];

    constructor(getAnimatedElements) {
        this.#animatedElements = getAnimatedElements();
    }

    setScrollAnimations() {
        this.#animatedElements.forEach(({ id, options }) => ScrollReveal().reveal(id, options))
    }
}