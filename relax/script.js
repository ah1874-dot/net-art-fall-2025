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
}

let button = document.querySelector("#myButton");
let vantaEffect = null;

button.addEventListener("click", function() {
  if (!vantaEffect) {
    vantaEffect = VANTA.CLOUDS2({
      el: "#your-element-selector",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00
      // texturePath optional — only needed if you have a local texture
    });
  }
});
