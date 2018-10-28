class PopupMenu extends HTMLElement {

    static get is() {
        return 'popup-menu';
    }

    constructor() {
        super();
    }

    get elements(): HTMLElement[] {
        const els = this.querySelectorAll('[data-menu-target]') as NodeListOf<HTMLElement>;
        return els ? Array.from(els) : [];
    }


    get value(): string {
        return this.elements[this.activeIndex].textContent;
    }

    get activeIndex(): number {
        return this.elements.findIndex((el) => el.getAttribute('data-menu-target') === 'toggle');
    }

    setActive(value: string) {
        this.elements[this.activeIndex].setAttribute('data-menu-target', 'hover');
        const index = this.elements.findIndex((el) => el.textContent === value);
        this.elements[index].setAttribute('data-menu-target', 'toggle');
        this.triggerElemChange();
    }

    _onClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const attrValue = target.getAttribute('data-menu-target');
        if (attrValue === 'hover') {
            this.setActive(target.textContent);
        }
        this.querySelector('.popup-menu').classList.toggle('hide');
    };

    connectedCallback() {
        this.bindEvents();
    }

    bindEvents() {
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
