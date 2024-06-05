let left = document.querySelector(".left");
let right = document.querySelector(".right");
let carousel = document.querySelector(".slider");
let translate = 0;

left.addEventListener("click", () => {
  if (translate < 0) {
    //   console.log("Hello World");
    translate = translate + 200;
    carousel.style.transform = "translateX(" + translate + "px)";
  }
});

right.addEventListener("click", () => {
  //   console.log("Hello World");
  if (translate > -200) {
    translate = translate - 200;
    carousel.style.transform = "translateX(" + translate + "px)";
  }
});
