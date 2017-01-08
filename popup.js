function popup(e) {
  var link = document.URL;
  alert("This is the Link : ( " +link+ " )");
}

var plusBtn = document.querySelector('.plus');
plusBtn.addEventListener('click', popup);
