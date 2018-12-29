class Spinner {
	static spin() {
		return new Spinner();
	}

	get build() {
		const el = document.createElement('div');
		el.classList.add('container-loader');
		el.innerHTML = `<div class="loader"></div>`;
		return el;
	}
	get elem() {
		return document.querySelector('.container-loader');
	}
}

export default Spinner;
