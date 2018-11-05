import PopupTrigger from '../../../core/popup-menu/ts/popup-trigger';

class DropDownTrigger  extends PopupTrigger {
	constructor() {
		super();
	}

	// _onUpdate = () => this.rerender();
	//
	// connectedCallback() {
	// 	this._parent = this.closest(Popup.is) as Popup;
	// 	this._parent.popupMenu.addEventListener('sc-elem-changed', this._onUpdate);
	// }
	//
	// disconnectedCallback() {
	// 	this._parent.popupMenu.removeEventListener('sc-elem-changed', this._onUpdate);
	// }
	//
	// private rerender() {
	// 	this.querySelector('.language-change').innerHTML = this._parent.popupMenu.activeValue.textContent;
	// }
}

customElements.define('drop-down-trigger', DropDownTrigger);
