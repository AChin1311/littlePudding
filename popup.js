$('document').onReady(function() {
	function OpenInNewTab(url) {
  		var win = window.open(url, '_blank');
  		win.focus();
	}
});