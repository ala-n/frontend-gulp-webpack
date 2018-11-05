class PopupMenu extends HTMLElement {
	constructor() {
		super();
	}

	get activeValue(): HTMLElement {
		return this.querySelector('[active-item]');
	}

	set activeValue(value: HTMLElement) {
		value.toggleAttribute('active-item');
		// this.activeValue.setAttribute('data-menu-target', 'hover');
		// value.setAttribute('data-menu-target', 'toggle');
	}

	triggerPopupMenu() {
		this.toggleAttribute('content-hide');
	}

	_onClick = (event: MouseEvent) => {
		this.activeValue = event.target as HTMLElement;
		this.triggerElemChange();
		this.triggerPopupMenu();
	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}

	triggerElemChange() {
		const event = new CustomEvent('sc-elem-changed', {
			bubbles: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;
