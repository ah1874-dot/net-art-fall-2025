const items = [
  // ---------- IMG 1 ----------
  {
    img: "img1",
    imgHover: "img1a",
    text: "Master, what makes us human?",
    textHover: "Selecting all images with traffic lights."
  },
  {
    img: "img1",
    imgHover: "img1a",
    text: "Master, what makes us human?",
    textHover: "Fridays."
  },
  {
    img: "img1",
    imgHover: "img1a",
    text: "Master, what makes us human?",
    textHover: "Taxes."
  },
  {
    img: "img1",
    imgHover: "img1a",
    text: "Master, what makes us human?",
    textHover: "Exactly 400 milligrams of caffeine."
  },

  // ---------- IMG 2 ----------
  {
    img: "img2",
    imgHover: "img2a",
    text: "What is your favorite party trick?",
    textHover: "Not going."
  },
  {
    img: "img2",
    imgHover: "img2a",
    text: "What is your favorite party trick?",
    textHover: "Finally listening to the voices in my head."
  },
  {
    img: "img2",
    imgHover: "img2a",
    text: "What is your favorite party trick?",
    textHover: "Converting the extroverts."
  },
  {
    img: "img2",
    imgHover: "img2a",
    text: "What is your favorite party trick?",
    textHover: "I’d rather scheme."
  },

  // ---------- IMG 3 ----------
  {
    img: "img3",
    imgHover: "img3a",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just matching your underappreciation."
  },
  {
    img: "img3",
    imgHover: "img3a",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just following the economy."
  },
  {
    img: "img3",
    imgHover: "img3a",
    text: "You’ve been underperforming in work lately,",
    textHover: "The pay stays the same with each performance."
  },
  {
    img: "img3",
    imgHover: "img3a",
    text: "You’ve been underperforming in work lately,",
    textHover: "Believe me, it’s not a performance."
  },

  // ---------- IMG 4 ----------
  {
    img: "img4",
    imgHover: "img4a",
    text: "I thought you said you were interesting.",
    textHover: "I said I was into resting."
  },
  {
    img: "img4",
    imgHover: "img4a",
    text: "I thought you said you were interesting.",
    textHover: "Yes, to interested people."
  },
  {
    img: "img4",
    imgHover: "img4a",
    text: "I thought you said you were interesting.",
    textHover: "I was until I met you."
  },
  {
    img: "img4",
    imgHover: "img4a",
    text: "I thought you said you were interesting.",
    textHover: "It comes and goes."
  },

  // ---------- IMG 5 ----------
  {
    img: "img5",
    imgHover: "img5a",
    text: "I’m lost without you.",
    textHover: "Use Google Maps."
  },
  {
    img: "img5",
    imgHover: "img5a",
    text: "I’m lost without you.",
    textHover: "A pity your poor navigational skills."
  },
  {
    img: "img5",
    imgHover: "img5a",
    text: "I’m lost without you.",
    textHover: "Moss grows on the north side of a tree."
  },
  {
    img: "img5",
    imgHover: "img5a",
    text: "I’m lost without you.",
    textHover: "How much will you pay me to help you find your way away from me?"
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
