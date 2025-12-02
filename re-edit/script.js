document.addEventListener("DOMContentLoaded", () => {

  const imageData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg",
      imgHover: "https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg",
      text: "Master, what makes us human?",
      textHover: "Selecting all images with traffic lights."
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Edward_Portielje_-_The_winning_Hand.jpg",
      imgHover: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Edward_Portielje_-_The_winning_Hand.jpg",
      text: "What is your favorite party trick?",
      textHover: "Not going."
    },
    {
      img: "https://media.mutualart.com/Images/2022_11/30/10/100323224/edward-cucuel-les-yachts-70NI2-338.Jpeg",
      imgHover: "https://media.mutualart.com/Images/2022_11/30/10/100323224/edward-cucuel-les-yachts-70NI2-338.Jpeg",
      text: "You’ve been underperforming in work lately,",
      textHover: "I’m just matching your underappreciation."
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg/500px-Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg",
      imgHover: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg/500px-Interior_with_a_Sleeping_Man_and_a_Woman_Darning_Socks_by_Wybrand_Hendriks.jpg",
      text: "I thought you said you were interesting.",
      textHover: "I said I was into resting."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZisKTWu5TG0rS3mgCWKDM5Hwcqz_mVL1og&s",
      imgHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZisKTWu5TG0rS3mgCWKDM5Hwcqz_mVL1og&s",
      text: "I’m lost without you.",
      textHover: "Use google maps."
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

});
