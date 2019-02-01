import PopupTrigger from '../../../core/popup-menu/ts/popup-trigger';
import ShareService from '../../../core/share-widget/ts/share-service';

class ShareWidget extends PopupTrigger {
	constructor() {
		super();
	}
	connectedCallback() {
		ShareService.updateToolboxes();
	}
}

customElements.define('share-widget', ShareWidget);
export default ShareWidget;
