class PopupMenu extends HTMLElement {
    static get observedAttributes() { return ['active']; }

	constructor() {
        super();
    }

    set active(value: boolean) {
        this.toggleAttribute('active', value);
    }

    get active(): boolean {
        return this.hasAttribute('active');
    }

    togglePopupMenu() {
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

