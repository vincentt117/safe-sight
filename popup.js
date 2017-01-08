function saveRatings(text) {
  alert(text);
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        saveRatings('xxx');
    });
});

