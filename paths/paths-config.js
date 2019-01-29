module.exports.PORT = 3011;
module.exports.INPUT_DIR = 'src/bundles/';
module.exports.OUTPUT_DIR = 'dist/';
module.exports.OUTPUT_DIR_AEM = './../ui.content/src/main/content/jcr_root/etc/clientlibs/newsboard';
// aemsync paths
module.exports.AEMSYNC_TARGETS = [
	'http://admin:admin@localhost:4502'
];
module.exports.AEMSYNC_PATHS = [
	'./../ui.content/src/main/content/jcr_root/etc/clientlibs/newsboard'
];