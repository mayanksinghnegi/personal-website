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
    var t1 =gsap.timeline();

    t1.from("#navbar", {
        y : -10,
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
    })
    .to(".boundingElem", {
        y : 0,
       opacity: 1,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: 0.2,
    })
    .from("#bottom", {
      y : -10,
      delay: -1,
      duration: 1.5,
      opacity: 0,
      ease: Expo.easeInOut,
  })
}
firstPageAnimation();