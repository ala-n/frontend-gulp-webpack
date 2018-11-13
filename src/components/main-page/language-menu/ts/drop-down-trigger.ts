import PopupTrigger from '../../../core/popup-menu/ts/popup-trigger';
import DropDownMenu from './drop-down-menu';

class DropDownTrigger extends PopupTrigger {
	constructor() {
		super();
	}

	_onUpdate = () => this.rerender();

	get activeElem(): HTMLElement {
		return (this.popupMenu as DropDownMenu).activeElem;
	}

	get activeValue(): string {
		return this.activeElem.textContent;
	}

	connectedCallback() {
		this.addEventListener('click', this._onClick);
		this.popupMenu.addEventListener('sc-elem-changed', this._onUpdate);
	}

	disconnectedCallback() {
		this.popupMenu.removeEventListener('sc-elem-changed', this._onUpdate);
	}

	private rerender() {
		const el = this.querySelector('[data-value]') as HTMLElement;
		if (el) {
			el.innerHTML = this.activeValue;
		}
	}
}

customElements.define('drop-down-trigger', DropDownTrigger);
