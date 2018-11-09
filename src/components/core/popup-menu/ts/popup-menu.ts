class PopupMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
		this.classList.add('popup-menu');
    }

    triggerPopupMenu() {
        this.toggleAttribute('active');
    }

    // getters / setters
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;

