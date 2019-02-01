import '../components/core/grid/ts/grid-service.ts';
import '../components/core/grid/ts/grid.ts';
import '../components/core/slide-carousel/ts/slide-carousel-dots.ts';
import '../components/core/slide-carousel/ts/slide-carousel.ts';
import '../components/core/video-overlay/ts/video-link';
import '../components/main-page/language-menu/ts/drop-down-menu.ts';
import '../components/main-page/language-menu/ts/drop-down-trigger.ts';
import '../components/main-page/share-widget/ts/share-widget';

const COMPONENTS_LIST: any[] = [] ;

COMPONENTS_LIST.forEach((Component) => {
	const component = new Component();
});


