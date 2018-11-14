import '../components/core/slide-carousel/ts/slide-carousel-dots.ts';
import '../components/core/slide-carousel/ts/slide-carousel.ts';
import '../components/main-page/language-menu/ts/drop-down-menu.ts';
import '../components/main-page/language-menu/ts/drop-down-trigger.ts';

import VideoTrigger from '../components/core/video-overlay/ts/video-trigger';


const COMPONENTS_LIST = [
	VideoTrigger
];

COMPONENTS_LIST.forEach((Component) => {
	const component = new Component();
	component.init();
});

