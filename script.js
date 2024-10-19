const scroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true,
});

const followCircle = document.getElementById("circle");
function circleMouseFollower(details) {
  // mouse position
  let mouseX = details.clientX;
  let mouseY = details.clientY;

  // Update the position of the element to follow the mouse

  followCircle.style.top = `${mouseY}px`;
  followCircle.style.left = `${mouseX}px`;
}
// Add an event listener to the document to track mouse movement
document.addEventListener("mousemove", circleMouseFollower);

//  ------------------++++++++++------------------------

// first page animation

function firstPageAnimation() {
  var t1 = gsap.timeline();

  t1.from("#navbar", {
    y: -10,
    duration: 1.5,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .to(".boundingElem", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      delay: -1.5,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from("#bottom", {
      y: -10,
      delay: -1.5,
      duration: 1.5,
      opacity: 0,
      ease: Expo.easeInOut,
    });
}
firstPageAnimation();

// -------------------------------------------------------------
// second page animation
// displaying image
document.querySelectorAll(".elements").forEach(function (elem) {
  // Initialize variables outside the event listener
  //rotating image
  var rotate = 0;
  var rotateDiff = 0;

  elem.addEventListener("mousemove", function (details) {
    //selecting image
    var diff = details.clientY - elem.getBoundingClientRect().top;

    rotateDiff = details.clientX - rotate;
    rotate = details.clientX;

    gsap.to(elem.querySelector(".set-image"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, rotateDiff * 0.4),
    });
  });
  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector(".set-image"), {
      opacity: 0,
      // ease: Power0,
      // top: 0,
      // left: 0,
      // rotate: 0,
    });
  });
});
