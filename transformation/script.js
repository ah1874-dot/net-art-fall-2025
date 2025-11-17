function fadeIn(element) {
  element.style.display = "block";
  setTimeout(() => {
    element.style.opacity = 1;
  }, 50);

function fadeOut(element) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = "none";
  }, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const pushBtn = document.querySelector("#push");
  const tapBtn = document.querySelector("#tap");

  pushBtn.addEventListener("click", () => {
    const text1 = document.querySelector("#myText1");
    const storm = document.querySelector("#stormImg");

    fadeIn(storm);
    fadeIn(text1);

    setTimeout(() => {
      fadeOut(text1);
      fadeOut(storm);
    }, 5000);
  });

  tapBtn.addEventListener("click", () => {
    const text2 = document.querySelector("#myText2");
    const flowers = document.querySelector("#flowerImg");

    fadeIn(flowers);
    fadeIn(text2);

    setTimeout(() => {
      fadeOut(text2);
      fadeOut(flowers);
    }, 7000);
  });
});
