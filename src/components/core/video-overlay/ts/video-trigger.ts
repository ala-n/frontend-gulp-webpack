import VideoPopupView from './video-popup-view';

class VideoTrigger {
	private _view: Element;

	load() {
		this.slides.forEach((el) => el.addEventListener('click', (event) => this._onChange(event)));
	}

	get slides(): HTMLElement[] {
		const els = document.querySelectorAll('.container-news') as NodeListOf<HTMLElement>;
		return els ? Array.from(els) : [];
	}

	private _onChange(event: MouseEvent) {
		event.preventDefault();
		const view = new VideoPopupView();
		this._view = view.createEmpty();
		console.log(this._view);
		// const target = event.target as HTMLElement;
		// const attrValue = target.getAttribute('href');
		// if (target.tagName === 'A' && attrValue.includes('youtube.com')) {
		// this._service.insertVideo(attrValue);
		// }
	}
}
export default VideoTrigger;
