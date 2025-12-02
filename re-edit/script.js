const items = [
  {
    base: "img/img1.jpg",
    hover: "img/img1a.jpg",
    text: "Master, what makes us human?",
    textHover: "Selecting all images with traffic lights."
  },
  {
    base: "img/img2.jpg",
    hover: "img/img2a.jpg",
    text: "What is your favorite party trick?",
    textHover: "Not going."
  },
  {
    base: "img/img3.jpg",
    hover: "img/img3a.jpg",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just matching your underappreciation."
  },
  {
    base: "img/img4.jpg",
    hover: "img/img4a.jpg",
    text: "I though you said you were interesting.",
    textHover: "I said I was into resting."
  },
  {
    base: "img/img5.jpg",
    hover: "img/img5a.jpg",
    text: "I’m lost without you.",
    textHover: "Use google maps."
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
