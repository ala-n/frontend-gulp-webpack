class Grid extends HTMLElement {
	constructor() {
		super();
	}

	get buttonLoad(): HTMLElement {
		const id = this.getAttribute('target');
		return document.getElementById(id);
	}

	_onClick = (event: MouseEvent) => {
		// ?
		event.stopPropagation();
		event.preventDefault();
	};
}

customElements.define('grid-element', Grid);
export default Grid;

