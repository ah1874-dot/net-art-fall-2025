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
button.addEventListener("click", function() {
  document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_74T1Qk6iei32TwGWiCaB2zfRh6GYFS89A&s')";
});
