// $(function () {
//
// // Dropdown toggle
// 	$('.dropdown-toggle').click(function () {
// 		$(this).next('.dropdown').toggle();
// 	});
//
// 	$(document).click(function (e) {
// 		var target = e.target;
// 		if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
// 			$('.dropdown').hide();
// 		}
// 	});
//
// });
class PopupMenu extends HTMLElement {

	static get is() {
		return 'popup-menu';
	}

	constructor() {
		super();
	}

	get elements(): HTMLElement[] {
		console.log(this.querySelector('popup-menu'));
		const els = this.querySelectorAll('[data-menu-item]') as NodeListOf<HTMLElement>;
		return els ? Array.from(els) : [];
	}

	get count(): number {
		return this.elements.length;
	}

	get activeIndex(): number {
		return this.elements.findIndex((el) => el.classList.contains('active-elem'));
	}

	// set activeIndex(index: number) {
	// 	this.elements[this.activeIndex].classList.remove('active-slide');
	// 	index = (index + this.count) % this.count;
	// 	this.elements[index].classList.add('active-slide');
	// 	this.triggerSlideChange();
	// }

	_onClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const attrValue = target.getAttribute('data-menu-target');
		console.log(attrValue, this.elements, this.activeIndex);
		if (attrValue === 'hover') {
			// this.setActive(attrValue);
			this.triggerElemChange();
			event.stopPropagation();
			event.preventDefault();
		}
	};

	// setActive(target: string) {
	// }

	connectedCallback() {
		this.bindEvents();
	}

	disconnectedCallback() {
		this.removeEventListener('click', this._onClick);
	}

	bindEvents() {
		this.addEventListener('click', this._onClick);
	}


	triggerElemChange() {
		const event = new CustomEvent('sc-elem-changed', {
			bubbles: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('popup-menu', PopupMenu);
export default PopupMenu;
