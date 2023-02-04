let tl = gsap.timeline();
tl.from("h1 *", {
  duration: 1,
  scale: 0,
  transformOrigin: "left center",
  stagger: 0.1,
});

function displayTitle() {
  let title = document.getElementById("title");
  title.style.visibility = "visible";
}
setTimeout(displayTitle, 100);

let sectionImg = document.querySelectorAll("section .featured-content");
let sectionTxtArr = document.querySelectorAll("section p");

for (let i = 0; i < sectionImg.length; i++) {
  let movement = 50;
  if (i % 2 == 0) {
    movement = -movement;
  }
  gsap.from(sectionImg[i], {
    scrollTrigger: {
      trigger: sectionImg[i],
      // start: "top 100%",
      end: "top 10%",
      scrub: 1,
    },
    x: movement,
    opacity: 0.5,
  });
  gsap.from(sectionTxtArr[i], {
    scrollTrigger: {
      trigger: sectionTxtArr[i],
      // start: "top 100%",
      end: "top 60%",
      scrub: 1,
    },
    x: -movement,
    opacity: 0.5,
  });
}
