function saveRatings(text) {
  alert(text);
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('saveStuff');
    // onClick's logic below:
    link.addEventListener('click', function() {
        saveRatings('');
    });
});
chrome.extension.sendRequest({redirect: 'google.com'});
var pattern=/\bBlocked/;
var viewtext_base_url = "http://viewtext.org/article?url=";
var newurl;
if (pattern.test(window.document.title)) // if it matches pattern defined above
{
  //newurl = viewtext_base_url + encodeURIComponent(window.location.href);
   // send message to redirect

}
