import PopupMenu from '../../../core/popup-menu/ts/popup-menu';

class DropDownMenu extends PopupMenu {
	constructor() {
		super();
	}

	_onClick = (event: MouseEvent) => {
		this.activeElem = event.target as HTMLElement;
		this.togglePopupMenu();
		this.triggerPopupStateChange();
	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}

	get activeElem(): HTMLElement {
		return this.querySelector('[active-item]');
	}

	set activeElem(value: HTMLElement) {
		if (this.activeElem) {
			this.activeElem.toggleAttribute('active-item');
		}
		value.toggleAttribute('active-item');
	}

	triggerPopupStateChange() {
		const event = new CustomEvent('sc-elem-changed', {
			bubbles: true,
		});
		this.dispatchEvent(event);
	}

	togglePopupMenu() {
		super.togglePopupMenu();
		if (this.active) {
			const activeItm = this.querySelector('[active-item]') as HTMLElement;
			(activeItm) && activeItm.focus();
		}
	}
}

customElements.define('drop-down-menu', DropDownMenu);

export default DropDownMenu;
