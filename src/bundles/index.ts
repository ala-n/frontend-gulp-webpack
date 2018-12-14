import '../components/core/grid/ts/grid.ts';
import '../components/core/slide-carousel/ts/slide-carousel-dots.ts';
import '../components/core/slide-carousel/ts/slide-carousel.ts';
import '../components/main-page/language-menu/ts/drop-down-menu.ts';
import '../components/main-page/language-menu/ts/drop-down-trigger.ts';

import VideoService from '../components/core/video-overlay/ts/video-service';
import VideoTrigger from '../components/core/video-overlay/ts/video-trigger';

const COMPONENTS_LIST = [
	VideoService
];

COMPONENTS_LIST.forEach((Component) => {
	const component = new Component();
});

const links = document.querySelectorAll('.container-news a[href*="youtube"]');
links.forEach((link: HTMLElement) => new VideoTrigger(link));

