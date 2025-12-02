// Add as many items as you want here
const items = [
  {
    base: "img/photo1.jpg",
    hover: "img/photo1-hover.jpg",
    text: "Base Text Here",
    textHover: "Hover Text Here"
  },
  {
    base: "img/photo2.jpg",
    hover: "img/photo2-hover.jpg",
    text: "Another Base Text",
    textHover: "Another Hover Text"
  }
];

const grid = document.getElementById("image-grid");

items.forEach(item => {
  const container = document.createElement("div");
  container.className = "img-container";

  container.innerHTML = `
    <img class="img-base" src="${item.base}" alt="">
    <img class="img-hover" src="${item.hover}" alt="">
    <div class="img-text">${item.text}</div>
    <div class="img-text-hover">${item.textHover}</div>
  `;

  grid.appendChild(container);
});
