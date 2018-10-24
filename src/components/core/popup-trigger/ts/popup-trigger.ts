import PopupMenu from './popup-menu';

class PopupTrigger extends HTMLElement {
	private _parent: PopupMenu;

	constructor() {
		super();
	}

	_onUpdate = () => this.rerender();

	_onClick = (event: MouseEvent) => {
		console.log(this._parent.elements);
		// const target = event.target as HTMLElement;
		// const attrValue = target.getAttribute('data-popup-trigger');
		// console.log(attrValue);
		// if (attrValue) {
		// 	// this.setActive(attrValue);
		// 	event.stopPropagation();
		// 	event.preventDefault();
		// }
	};

	bindEvents() {
		this.addEventListener('click', this._onClick);
	}

	private connectedCallback() {
		this._parent = this.closest(PopupMenu.is) as PopupMenu;

		console.log(this._parent);
		this.rerender();
		this.bindEvents();
		this._parent.addEventListener('sc-elem-changed', this._onUpdate);
	}

	private disconnectedCallback() {
		this._parent.removeEventListener('sc-elem-changed', this._onUpdate);
	}

	private rerender() {
		const html = '';
		const count = this._parent.elements.length;
		const activeIndex = this._parent.activeIndex;
		console.log(activeIndex);
		for (let i = 0; i < count; ++i) {
			// html += this.buildDot(i, i === activeIndex);
		}
		this.innerHTML = html;
	}
}

customElements.define('popup-trigger', PopupTrigger);
