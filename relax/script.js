function changeStyle() {
  let textElement = document.querySelector("#myText");
  textElement.style.cssText = `
    color: rgb(143, 188, 139);
    font-size: 30px;
    font-style: italic;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 8px;
  `;

 
  setTimeout(() => {
    textElement.style.transition = "opacity 1.5s ease";
    textElement.style.opacity = "0";

    setTimeout(() => {
      textElement.style.display = "none";
    }, 1500);
  }, 10000);
}


let button = document.querySelector("#myButton");
let vantaEffect = null;

button.addEventListener("click", function() {
  if (!vantaEffect) {
    vantaEffect = VANTA.CLOUDS2({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      backgroundAlpha: 0.0,
      skyColor: 0x5070ff,
      cloudColor: 0xffffff,
      texturePath: "https://raw.githubusercontent.com/tengbao/vanta/master/src/images/noise.png"
    });
  }
});
