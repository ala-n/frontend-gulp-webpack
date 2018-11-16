import PopupMenu from '../../popup-menu/ts/popup-menu';

let instance: VideoService;

class VideoService {
	/**
	 * open video-overlay
	 * @param {string} url - youtube url to open
	 */
	static show(url: string) {
		const inst = new VideoService();
		inst.url = url;
		inst.show();
	}

	/**
	 * hide opened video-overlay
	 */
	static hide() {
		const inst = new VideoService();
		// inst.hide();
	}

	_popup: PopupMenu;
	url: string;

	constructor() {
		if (instance) {
			return instance;
		}
		instance = this;
		instance._popup = instance._createElem() as PopupMenu;
		document.querySelector('body').appendChild(instance._popup);
	}

	get iframe(): HTMLIFrameElement {
		return this._popup.querySelector('iframe');
	}

	show() {
		if (this._popup && !this._popup.active) {
			this.iframe.src = this.url;
			this._popup.triggerPopupMenu();
		}
	}

	// private hide() {
	// 	if (this._popup && this._popup.active) {
	// 		// this.iframe.src = '';
	// 		this._popup.triggerPopupMenu();
	// 	}
	// }

	private _createElem(): HTMLElement {
		const fragment = document.createElement('template');
		fragment.innerHTML =
			`<popup-menu id="video-popup">
				<iframe class="video-popup-iframe" frameborder="0" allowfullscreen></iframe>
			 </popup-menu>`;
		return fragment.content.firstElementChild as HTMLElement;
	}
}

export default VideoService;
