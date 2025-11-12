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

