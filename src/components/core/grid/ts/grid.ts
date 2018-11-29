class Grid extends HTMLElement {
	constructor() {
		super();
	}

	_onClick = (event: MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
	};
}

customElements.define('grid-element', Grid);
export default Grid;

