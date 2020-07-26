var hostPattern=/^console\.cloud\.google\.com/;
var authUserPattern=/\&authuser\=/;
var authUserString = "&authuser=1"
var newurl;

// if page host is GCP and authuser param not in URL
if (hostPattern.test(window.document.location.host) && !authUserPattern.test(window.document.location))
{
  newurl = window.location.href + authUserString;
  console.log("Redirecting to new url with authuser=1: " + newurl);
  // chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
  // chrome.runtime.sendMessage({loadURL: true});
}

// code above would not run in this new implementation
chrome.runtime.sendMessage({loadURL: true});

