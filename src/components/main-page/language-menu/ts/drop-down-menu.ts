import PopupMenu from '../../../core/popup-menu/ts/popup-menu';

class DropDownMenu extends PopupMenu {
	constructor() {
		super();
	}

	_onClick = (event: MouseEvent) => {
		this.activeValue = event.target as HTMLElement; // instead get trigger(input) and set value

		this.triggerPopupMenu();
		this.triggerElemChange();

	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}

	get activeValue(): HTMLElement {
		return this.querySelector('[active-item]');
	}

	set activeValue(value: HTMLElement) {
		this.activeValue.toggleAttribute('active-item');
		value.toggleAttribute('active-item');
	}

	triggerElemChange() {
		const event = new CustomEvent('sc-elem-changed', {
			bubbles: true,
		});
		this.dispatchEvent(event);
	}

	triggerPopupMenu() {
		super.triggerPopupMenu();
		if (!this.hasAttribute('content-hide')) {
			const activeItm = this.querySelector('[active-item]') as HTMLElement;
			(activeItm) && activeItm.focus();
		}
	}
}

customElements.define('drop-down-menu', DropDownMenu);

export default DropDownMenu;
