import PopupMenu from '../../../core/popup-menu/ts/popup-menu';

class DropDownMenu extends PopupMenu {
	constructor() {
		super();
	}

	_onClick = (event: MouseEvent) => {
		this.activeElem = event.target as HTMLElement;
		this.triggerPopupMenu();
		this.triggerPopupStateChange();
	};

	connectedCallback() {
		this.id = 'drop-down-popup-menu';
		this.addEventListener('click', this._onClick);
	}

	get activeElem(): HTMLElement {
		return this.querySelector('[active-item]');
	}

	set activeElem(value: HTMLElement) {
		this.activeElem.toggleAttribute('active-item');
		value.toggleAttribute('active-item');
	}

	triggerPopupStateChange() {
		const event = new CustomEvent('sc-elem-changed', {
			bubbles: true,
		});
		this.dispatchEvent(event);
	}

	triggerPopupMenu() {
		super.triggerPopupMenu();
		if (this.active) {
			const activeItm = this.querySelector('[active-item]') as HTMLElement;
			(activeItm) && activeItm.focus();
		}
	}
}

customElements.define('drop-down-menu', DropDownMenu);

export default DropDownMenu;
