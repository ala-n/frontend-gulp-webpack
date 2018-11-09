class PopupMenu extends HTMLElement {
	constructor() {
		super();
	}

	get activeAttribute() {
		return this.getAttribute('active');
	}

	set active(value: boolean) {
		// value ? this.classList.add(this.activeAttribute) : this.classList.remove(this.activeAttribute);
		this.setAttribute('aria-hidden', String(!value));
	}

	get active(): boolean {
		return !!this.activeAttribute;
	}

	triggerPopupMenu() {
		this.active = !this.active;
	}
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;

