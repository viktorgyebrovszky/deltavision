// var headers = document.getElementById('approach_div');
//
// function fadeOutOnScroll(element) {
// 	if (!element) {
// 		return;
// 	}
//
// 	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
// 	var elementHeight = element.offsetHeight;
// 	var scrollTop = document.documentElement.scrollTop;
//
// 	var opacity = 1;
//
// 	if (scrollTop > distanceToTop) {
// 		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
// 	}
//
// 	if (opacity >= 0) {
// 		element.style.opacity = opacity;
// 	}
// }
//
// function scrollHandler() => {
// 	fadeOutOnScroll(headers);
// }
//
// window.addEventListener('scroll', scrollHandler);

// $(window).scroll(function () {
//     var scrollTops = $(window).scrollTop();
//     var heights = $(window).height();
//     $('.fader2, .fader3').css({
//         'opacity': ((heights - scrollTops) / heights)
//     });
// });

// $(window).scroll(function(){
//     $(".fader2").css("opacity", 1 - $(window).scrollTop() / 1200);
//   });

// document.getElementById("approach_div").style.backgroundColor = "blue";

// HOME
function scrollHandlerHome() {
  var element = document.getElementById('home');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top+300;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
    diff = scrollTop - distanceToTop
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
  // console.log(diff)

}

window.addEventListener('scroll', scrollHandlerHome);

// APPROACH
function scrollHandlerApproach() {
  var element = document.getElementById('approach');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top-200;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', scrollHandlerApproach);

// SERVICES
function scrollHandlerServices() {
  var element = document.getElementById('services');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top+300;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', scrollHandlerServices);

// CUSTOMERS
function scrollHandlerCustomers() {
  var element = document.getElementById('customers');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top-100;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', scrollHandlerCustomers);

// ABOUT
function scrollHandlerAbout() {
  var element = document.getElementById('about');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top+400;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', scrollHandlerAbout);

// const checkpoint = 500;
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = (currentScroll-150) / checkpoint;
//   } else {
//     opacity = 1;
//   }
//   document.querySelector(".fader").style.opacity = opacity;
//   // document.querySelector(".fader2").style.opacity = opacity;
// });
