class PopupMenu extends HTMLElement {
    constructor() {
        super();
    }

    set active(value: boolean) {
        this.toggleAttribute('active');
        this.setAttribute('aria-hidden', String(!value));
    }

    get active(): boolean {
        return this.hasAttribute('active');
    }

    triggerPopupMenu() {
        this.active = !this.active;
    }
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;

