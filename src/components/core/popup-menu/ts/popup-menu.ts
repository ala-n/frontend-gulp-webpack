class PopupMenu extends HTMLElement {
    constructor() {
        super();
    }

    triggerPopupMenu() {
        this.toggleAttribute('not-active');
    }
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;

