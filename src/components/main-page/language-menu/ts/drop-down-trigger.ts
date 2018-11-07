import PopupTrigger from '../../../core/popup-menu/ts/popup-trigger';
import DropDownMenu from './drop-down-menu';

class DropDownTrigger extends PopupTrigger {
	constructor() {
		super();
	}

	_onUpdate = () => this.rerender();

	get value(): string {
		return (this.popupMenu as DropDownMenu).activeValue.textContent;
	}

	connectedCallback() {
		this.addEventListener('click', this._onClick);
		this.popupMenu.addEventListener('sc-elem-changed', this._onUpdate);
	}

	disconnectedCallback() {
		this.popupMenu.removeEventListener('sc-elem-changed', this._onUpdate);
	}

	private rerender() {
		this.querySelector('.language-change').innerHTML = this.value;
	}
}

customElements.define('drop-down-trigger', DropDownTrigger);
