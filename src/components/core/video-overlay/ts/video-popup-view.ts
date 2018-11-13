class VideoPopupView {
	private static _template: HTMLTemplateElement;

	static get template() {
		if (!VideoPopupView._template) {
			VideoPopupView._template = document.getElementById('video-popup') as HTMLTemplateElement;
		}
		return VideoPopupView._template;
	}

	// constructor() {
	//
	// }

	// clear() {
	// }
	//

	createEmpty() {
		const fragment = document.importNode(VideoPopupView.template.content, true);
		return fragment.firstElementChild;
	}
}

export default VideoPopupView;
