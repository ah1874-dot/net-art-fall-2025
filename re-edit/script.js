const items = [
  {
    base: "https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg",
    hover: "https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg",
    text: "Master, what makes us human?",
    textHover: "Selecting all images with traffic lights."
  },
  {
    base: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Edward_Portielje_-_The_winning_Hand.jpg",
    hover: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Edward_Portielje_-_The_winning_Hand.jpg",
    text: "What is your favorite party trick?",
    textHover: "Not going."
  },
  {
    base: "https://media.mutualart.com/Images/2022_11/30/10/100323224/edward-cucuel-les-yachts-70NI2-338.Jpeg",
    hover: "https://media.mutualart.com/Images/2022_11/30/10/100323224/edward-cucuel-les-yachts-70NI2-338.Jpeg",
    text: "You’ve been underperforming in work lately,",
    textHover: "I’m just matching your underappreciation."
  },
  {
    base: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg/500px-Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg",
    hover: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg/500px-Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg",
    text: "I thought you said you were interesting.",
    textHover: "I said I was into resting."
  },
  {
    base: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00nZB1RN92xHonZ5S7jywweMeSz_jgdU7_Z2xC1XyrBe3TZxfrarDf9p3YwQC-Lx-B28&usqp=CAU",
    hover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00nZB1RN92xHonZ5S7jywweMeSz_jgdU7_Z2xC1XyrBe3TZxfrarDf9p3YwQC-Lx-B28&usqp=CAU",
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
