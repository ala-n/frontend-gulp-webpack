import PopupMenu from './popup-menu';

class DropDown extends HTMLElement {
	static get is() {
		return 'drop-down';
	}

	constructor() {
		super();
	}

	get popupMenu(): PopupMenu {
		return this.nextElementSibling as PopupMenu;
	}

	_onClick = (event: MouseEvent) => {
		this.popupMenu.triggerElements();
		event.stopPropagation();
		event.preventDefault();
	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}
}

customElements.define('drop-down', DropDown);
export default DropDown;
