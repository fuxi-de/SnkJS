jQuery = $ = require('jquery');

// DOMContentLoaded has fired before this async script has loaded
if (window.isReady) {
	jQuery.ready();
}
require('./modules/canvas');
