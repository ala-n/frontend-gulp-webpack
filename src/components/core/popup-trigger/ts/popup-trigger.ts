import PopupMenu from './popup-menu';

class PopupTrigger extends HTMLElement {
	constructor() {
		super();
	}

	get newActiveValue(): string {
		return this.getAttribute('data-popup-trigger');
	}

	get popupMenu(): PopupMenu {
		return this.nextElementSibling as PopupMenu;
	}

	_onClick = (event: MouseEvent) => {
		this.popupMenu.querySelector('.popup-menu').classList.toggle('hide');
		event.stopPropagation();
		event.preventDefault();
	};

	_onUpdate = () => this.rerender();

	connectedCallback() {
		this.bindEvents();
		this.popupMenu.addEventListener('sc-elem-changed', this._onUpdate);
	}

	bindEvents() {
		this.addEventListener('click', this._onClick);
	}

	private disconnectedCallback() {
		this.popupMenu.removeEventListener('sc-elem-changed', this._onUpdate);
	}

	private rerender() {
		this.setAttribute('data-popup-trigger',  this.popupMenu.value);
		this.querySelector('.language-change').innerHTML = this.newActiveValue;
	}
}

customElements.define('popup-trigger', PopupTrigger);
