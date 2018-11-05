import PopupMenu from '../../../core/popup-menu/ts/popup-menu';

class DropDownMenu extends PopupMenu {
	constructor() {
		super();
	}
	//
	// get activeValue(): HTMLElement {
	// 	return this.querySelector('[data-menu-target="toggle"]');
	// }
	//
	// set activeValue(value: HTMLElement) {
	// 	this.activeValue.setAttribute('data-menu-target', 'hover');
	// 	value.setAttribute('data-menu-target', 'toggle');
	// }
	//
	// triggerElements() {
	// 	this.querySelector('.popup-menu').classList.toggle('hide');
	// }
	//
	// _onClick = (event: MouseEvent) => {
	// 	this.activeValue = event.target as HTMLElement;
	// 	this.triggerElemChange();
	// 	this.triggerElements();
	// };
	//
	// connectedCallback() {
	// 	this.addEventListener('click', this._onClick);
	// }
	//
	// triggerElemChange() {
	// 	const event = new CustomEvent('sc-elem-changed', {
	// 		bubbles: true
	// 	});
	// 	this.dispatchEvent(event);
	// }
}

customElements.define('drop-down-menu', DropDownMenu);

