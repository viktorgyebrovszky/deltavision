const checkpoint2 = 400;

function scrollArrowLeft() {
  const currentScrolling = window.pageYOffset;
  if (currentScrolling <= checkpoint2) {
    opacity2 = (currentScrolling) / checkpoint2;
  } else {
    opacity2 = 1;
  }
  document.querySelector(".icon-bar").style.opacity = opacity2;
  // console.log(opacity2)
}
window.addEventListener("scroll", scrollArrowLeft);


// window.addEventListener("scroll", () => {
//   const currentScrolling = window.pageYOffset;
//   if (currentScrolling <= checkpoint2) {
//     opacity2 = (currentScrolling) / checkpoint2;
//   } else {
//     opacity2 = 1;
//   }
//   document.querySelector(".icon-bar").style.opacity = opacity2;
//   console.log(opacity2)
// });
