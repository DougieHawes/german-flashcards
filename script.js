// html elements
const categories = document.getElementById("categories");
const startButton = document.getElementById("start-button");
const activeDiv = document.getElementById("active-div");
const englishSide = document.getElementById("card-english");
const germanSide = document.getElementById("card-german");
const englishSideSentence = document.getElementById("card-english-sentence");
const germanSideSentence = document.getElementById("card-german-sentence");
const category = document.getElementById("category");
const newCardBtn = document.getElementById("new-card-button");

activeDiv.style.display = "none";
germanSide.style.display = "none";

// js elements
const categorySet = new Set();
let possibleCards = [];

for (var i = 0; i < cards.length; i++) {
  categorySet.add(cards[i].category);
}

categorySet.forEach((c) => {
  categories.innerHTML += `<div>
        <input type="checkbox" id="${c}Check" checked>
        <label style='font-size: 21px;'> ${c}</label>
      </div><br>`;
});

// functions
const getRandomIndex = () => {
  return Math.floor(Math.random() * possibleCards.length);
};

const getCardText = () => {
  for (var i = 0; i < cards.length; i++) {
    if (document.getElementById(`${cards[i].category}Check`).checked) {
      possibleCards.push(cards[i]);
    }
  }

  if (possibleCards.length > 0) {
    const randomIndex = getRandomIndex();

    category.innerHTML = possibleCards[randomIndex].category;
    englishSideSentence.innerHTML = possibleCards[randomIndex].english;
    germanSideSentence.innerHTML = possibleCards[randomIndex].german;
  }
};

// event listeners
startButton.addEventListener("click", () => {
  getCardText();

  startButton.style.display = "none";
  categories.style.display = "none";
  activeDiv.style.display = "block";
});

englishSide.addEventListener("click", () => {
  englishSide.style.display = "none";
  germanSide.style.display = "block";
});

germanSide.addEventListener("click", () => {
  germanSide.style.display = "none";
  englishSide.style.display = "block";
});

newCardBtn.addEventListener("click", getCardText);
