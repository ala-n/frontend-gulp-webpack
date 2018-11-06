class PopupMenu extends HTMLElement {
	constructor() {
		super();
	}

	triggerPopupMenu() {
		this.toggleAttribute('content-hide'); // better to have defined target state
	}
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;
