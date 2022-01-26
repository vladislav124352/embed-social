export const setHeaderAnimations = () => {
    const header = document.getElementById('header');

    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= header.clientHeight) {
            header.classList.remove('header-scroll-relative')
            header.classList.add('header-scroll-sticky')
        } else if (window.scrollY === 0) {
            header.classList.remove('header-scroll-sticky')
            header.classList.add('header-scroll-relative')
        }
    })
}