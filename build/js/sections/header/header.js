export default class Header {
    #headerMenuButton;
    #headerMenu;
    #header;

    constructor() {
        this.#headerMenuButton = document.getElementById('header-menu-button');
        this.#headerMenu = document.getElementById('header-menu');
        this.#header = document.getElementById('header');
    }

    setHeaderAnimations() {
        this.#setHeaderMenuAnimations();
        this.#setHeaderScrollAnimations();
    }

    #setHeaderMenuAnimations() {
        this.#headerMenuButton.addEventListener('click', (event) => {
            const isHidden = this.#headerMenu.classList.contains('header-menu-hidden');
            if (isHidden) this.#onSetHeaderMenuState('show')
            else this.#onSetHeaderMenuState('hidden')
        })
    }


    #setHeaderScrollAnimations() {
        window.addEventListener('scroll', (event) => {
            this.#onSetHeaderMenuState('hidden')
            if (window.scrollY >= this.#header.clientHeight) {
                this.#header.classList.remove('header-scroll-relative')
                this.#header.classList.add('header-scroll-sticky')
            } else if (window.scrollY === 0) {
                this.#header.classList.remove('header-scroll-sticky')
                this.#header.classList.add('header-scroll-relative')
            }
        })
    }

    #onSetHeaderMenuState(state) {
        this.#headerMenu.classList.remove(`header-menu-${state === 'show' ? 'hidden' : 'show'}`)
        this.#headerMenu.classList.add(`header-menu-${state === 'show' ? 'show' : 'hidden'}`)
        this.#headerMenu.style.top = `${this.#header.clientHeight - 1}px`;
    }
}