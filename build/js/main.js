import { setHeaderAnimations } from './sections/header/setHeaderAnimations.js';

window.addEventListener('DOMContentLoaded', () => {
    class App {
        constructor() {
        }

        run() {
            setHeaderAnimations();
        }
    }

    const app = new App();
    app.run();
})