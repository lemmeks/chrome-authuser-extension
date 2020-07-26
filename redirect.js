// original working version based on redirecting loaded page
// onRequest fun was deprecated from Chrome35
// chrome.extension.onRequest.addListener(function(request, sender) {
//         chrome.tabs.update(sender.tab.id, {url: request.redirect});
//     });/

var authUserPattern=/\&authuser\=/;
var hostPattern=/console\.cloud\.google\.com/;

chrome.runtime.onMessage.addListener(function(message, sender, response) {
	var loadedUrl = sender.tab.url;
	console.log("[LOG] loadedUrl = " + loadedUrl)

	if (message.loadURL && !authUserPattern.test(loadedUrl) && hostPattern.test(loadedUrl)) {
		var newUrl = sender.tab.url.concat("&authuser=1");
		console.log("[LOG] new url: " + newUrl)
		chrome.tabs.update(sender.tab.id, {url: newUrl})
	}
});
