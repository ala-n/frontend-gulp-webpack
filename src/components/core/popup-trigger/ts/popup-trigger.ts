import Popup from './drop-down';

class PopupTrigger extends HTMLElement {
	private _parent: Popup;

	constructor() {
		super();
	}

	_onUpdate = () => this.rerender();

	connectedCallback() {
		this._parent = this.closest(Popup.is) as Popup;
		this._parent.popupMenu.addEventListener('sc-elem-changed', this._onUpdate);
	}

	disconnectedCallback() {
		this._parent.popupMenu.removeEventListener('sc-elem-changed', this._onUpdate);
	}

	private rerender() {
		this.querySelector('.language-change').innerHTML = this._parent.popupMenu.activeValue.textContent;
	}
}

customElements.define('popup-trigger', PopupTrigger);
