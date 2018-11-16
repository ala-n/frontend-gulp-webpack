import VideoService from './video-service';

class VideoTrigger {

	constructor(link: HTMLElement) {
		link.addEventListener('click', (event) => this._onClick(event), false);
	}

	private _onClick(event: MouseEvent) {
		event.preventDefault();
		const target = event.target as HTMLElement;
		const url = target.getAttribute('href');
		VideoService.show(url);
	}
}

export default VideoTrigger;
