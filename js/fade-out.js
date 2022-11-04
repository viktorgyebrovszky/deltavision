window.onscroll = function() {
  var target = document.getElementById("target-out");

  var height = window.innerHeight;

  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  // Change this if you want it to fade faster
  height = height / 3;

  target.style.opacity = (height - scrollTop) / height;

};
