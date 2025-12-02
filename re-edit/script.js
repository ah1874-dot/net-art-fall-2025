const imageData = [
  {

    img: "img1.jpg",
    imgHover: "img1a.jpg",
    text: "Master, what makes us human?",
    textHover: "Selecting all images with traffic lights."
  },
  {
    img: "img2.jpg",
    imgHover: "img2a.jpg",
    text: "What is your favorite party trick?",
    textHover: "Not going."
  },
  {
    img: "img3.jpg",
    imgHover: "img3a.jpg",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just matching your underappreciation."
  },
  {
    img: "img4.jpg",
    imgHover: "img4a.jpg",
    text: "I thought you said you were interesting.",
    textHover: "I said I was into resting."
  },
  {
    img: "img5.jpg",
    imgHover: "img5a.jpg",
    text: "I’m lost without you.",
    textHover: "Use Google Maps."
  }
];

const grid = document.getElementById("image-grid");

imageData.forEach(item => {
  const container = document.createElement("div");
  container.className = "img-container";

  container.innerHTML = `
    <img src="${item.img}" class="img-base">
    <img src="${item.imgHover}" class="img-hover">
    <div class="img-text">${item.text}</div>
    <div class="img-text img-text-hover">${item.textHover}</div>
  `;

  grid.appendChild(container);
});

