class PopupMenu extends HTMLElement {
    static get observedAttributes() { return ['active']; }

	constructor() {
        super();
    }

    set active(value: boolean) {
        this.toggleAttribute('active');
    }

    get active(): boolean {
        return this.hasAttribute('active');
    }

    triggerPopupMenu() {
        this.active = !this.active;
    }

	attributeChangedCallback(name: string, oldVal: string, val: string) {
        switch (name) {
            case 'active':
				this.setAttribute('aria-hidden', String(!val));
				return;
		}
    }
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;

