import PopupMenu from './popup-menu';

class PopupTrigger extends HTMLElement {
	static get is() {
		return 'popup-trigger';
	}

	constructor() {
		super();
	}

	get popupMenu(): PopupMenu {
		return this.nextElementSibling as PopupMenu;
	}

	_onClick = (event: MouseEvent) => {
		this.popupMenu.triggerPopupMenu();
		event.stopPropagation();
		event.preventDefault();
	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}
}

customElements.define('popup-trigger', PopupTrigger);
export default PopupTrigger;
