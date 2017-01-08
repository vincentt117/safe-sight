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

var pattern=/\bBlocked/;
var viewtext_base_url = "http://viewtext.org/article?url=";
var newurl;
if (pattern.test(window.document.title)) // if it matches pattern defined above
{
  newurl = viewtext_base_url + encodeURIComponent(window.location.href);
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

}
