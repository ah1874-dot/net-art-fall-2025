const items = [
  {
    img: "img1",
    imgHover: "img1a",
    text: "Master, what makes us human?",
    textHover: "Selecting all images with traffic lights."
  },
  {
    img: "img2",
    imgHover: "img2a",
    text: "What is your favorite party trick?",
    textHover: "Not going."
  },
  {
    img: "img3",
    imgHover: "img3a",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just matching your underappreciation."
  },
  {
    img: "img4",
    imgHover: "img4a",
    text: "I thought you said you were interesting.",
    textHover: "I said I was into resting."
  },
  {
    img: "img5",
    imgHover: "img5a",
    text: "I’m lost without you.",
    textHover: "Use google maps."
  }
];

const grid = document.getElementById("image-grid");

items.forEach(item => {
  const container = document.createElement("div");
  container.className = "img-container";

  container.innerHTML = `
    <div class="${item.img} img"></div>
    <div class="${item.imgHover} img"></div>
    <div class="text ${item.img.replace('img', 'text')}">${item.text}</div>
    <div class="text ${item.imgHover.replace('img', 'text')}">${item.textHover}</div>
  `;

  grid.appendChild(container);
});
