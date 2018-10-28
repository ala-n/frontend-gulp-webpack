import PopupMenu from './popup-menu';

class PopupTrigger extends HTMLElement {
    private _popup_menu: PopupMenu;

    constructor() {
        super();
    }

    get newActiveValue(): string {
        return this.getAttribute('data-popup-trigger');
    }

    _onClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        target.closest('.nav-menu').querySelector('.popup-menu').classList.toggle('hide');
        event.stopPropagation();
        event.preventDefault();
    };

    _onUpdate = () => this.rerender();

    connectedCallback() {
        this._popup_menu = this.closest('.nav-menu').querySelector(PopupMenu.is) as PopupMenu;
        this.bindEvents();
        this._popup_menu.addEventListener('sc-elem-changed', this._onUpdate);
    }

    bindEvents() {
        this.addEventListener('click', this._onClick);
    }

    private disconnectedCallback() {
        this._popup_menu.removeEventListener('sc-elem-changed', this._onUpdate);
    }

    private rerender() {
        this.setAttribute('data-popup-trigger', this._popup_menu.value);
        this.querySelector('.language-change').innerHTML = this.newActiveValue;
    }
}

customElements.define('popup-trigger', PopupTrigger);
