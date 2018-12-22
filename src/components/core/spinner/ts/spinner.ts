class Spinner {
	static spin() {
		return new Spinner();
	}

	query: MediaQueryList;

	constructor() {
		this.query = null;
	}

	get buildSpinnerEl() {
		// const template = document.createElement('template');
		// template.innerHTML = dataElem;
		// document.querySelector('[data-items]').appendChild(template.content);
		const el = document.createElement('div');
		el.innerHTML = `<span></span><span></span><span></span><span></span>`;
		el.classList.add('cssload-jumping');
		return el;
	}
}
export default Spinner;
