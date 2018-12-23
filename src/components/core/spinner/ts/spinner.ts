class Spinner {
    static spin() {
        return new Spinner();
    }

    get buildSpinnerEl() {
        const el = document.createElement('div');
        el.classList.add('container-loader');
        el.innerHTML = `<div class="loader"></div>`;
        return el;
    }
}

export default Spinner;
