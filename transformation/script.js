function fadeIn(element) {
  element.style.display = "block";
  setTimeout(() => {
    element.style.opacity = 1;
  }, 50); // slight delay to trigger transition
}

function fadeOut(element) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = "none";
  }, 1000); // matches CSS transition duration
}

document.querySelector("#push").addEventListener("click", () => {
  const text1 = document.querySelector("#myText1");
  const storm = document.querySelector("#stormImg");

  fadeIn(text1);
  fadeIn(storm);

  setTimeout(() => {
    fadeOut(text1);
    fadeOut(storm);
  }, 5000);
});

document.querySelector("#tap").addEventListener("click", () => {
  const text2 = document.querySelector("#myText2");
  const flowers = document.querySelector("#flowerImg");

  fadeIn(text2);
  fadeIn(flowers);

  setTimeout(() => {
    fadeOut(text2);
    fadeOut(flowers);
  }, 7000);
});
