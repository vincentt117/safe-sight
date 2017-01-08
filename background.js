var host = "http://tpb.pirateparty.org.uk";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://piratebay.se/*",
            "*://www.piratebay.se/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

if (window.location.hostname == "www.morgancc.edu" && 
    window.location.pathname=="" ) {
    console.log("ICU");
    location.replace("https://vincentt117.github.io/redirect-sight-safe/");
   window.location.href = 'https://vincentt117.github.io/redirect-sight-safe/'; 
}
