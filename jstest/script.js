function changeStyle() {
  let textElement = document.querySelector("#myText");
}
  textElement.style.cssText = "color:143, 188, 139 ; font-size: 30px; font-style: italic; background-color: 85, 107, 47;";
let button= document.querySelector("#myButton");
button.addEventListener("tap", function(){
    document.body.style.backgroundColor="lightblue";
});
