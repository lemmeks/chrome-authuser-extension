var pageTitlePattern=/\bIANA/;
var authUserPattern=/\&authuser\=/;
var authuser = "&authuser=1"
var newurl;
console.log(window.document.title);
if (pageTitlePattern.test(window.document.title) && !authUserPattern.test(window.document.location)) // if it matches pattern defined above
{
  newurl = window.location.href + authuser;
  console.log("new url is: " + newurl);
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
}
