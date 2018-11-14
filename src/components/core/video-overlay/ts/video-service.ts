import PopupMenu from '../../popup-menu/ts/popup-menu';

let instance: VideoService;

class VideoService {
	constructor() {
		if (instance) {
			return instance;
		}
		instance = this;

		// create DOM elements
		// attach them to the real dom (at the end of body tag as an example
		// mb some caching (i mean fields and something like that)
	}

	/**
	 * open video-overlay
	 * @param {string} url - youtube url to open
	 */
	// static show(url: string) {
	// 	const inst = new VideoService();
	// 	// inst.url = url;
	// 	// inst.show();
	// }
	//
	// /**
	//  * hide opened video-overlay
	//  */
	// static hide() {
	// 	const inst = new VideoService();
	// 	// inst.hide();
	// }

	createPopup() {
		// const fragment = document.importNode(VideoService.template, true);
		// fragment.innerHTML =
		// 	`<popup-menu class="popup">
		// 		<iframe width="600" height="350" src="" frameborder="0" allowfullscreen></iframe>
		// 	</popup-menu>`;
		// // this.videoPopup = fragment.querySelector('popup') as PopupMenu;
		// // console.log(fragment, this.videoPopup);
		// // iframe.src = srcValue;
		// // this._popup.triggerMenu();
		// return fragment.firstElementChild;
	}
}

export default VideoService;
