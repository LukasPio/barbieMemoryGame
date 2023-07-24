const grid = document.querySelector(".grid");
const cardList = [
  "Card1",
  "Card2",
  "Card3",
  "Card4",
  "Card5",
  "Card6",
  "Card7",
  "Card8",
  "Card9",
  "Card10",
];
const playerNameCamp = document.querySelector('.player')

const timer = document.querySelector('.time')

let firstCard = "";
let secondCard = "";

function checkVictory () {
    const disabledCard = document.querySelectorAll('.disabledCard')
    if (disabledCard.length === 20) {
        setTimeout(() => {
          alert(`Parabéns ${playerNameCamp.innerHTML}, Seu tempo foi de: ${timer.textContent} segundos`)
          clearInterval(this.loop)
        }, 400)
        
    }
}

function checkCards () {
    const primeiraCarta = firstCard.getAttribute('data-cardNumber')
    const segundaCarta = secondCard.getAttribute('data-cardNumber')
    
    if (primeiraCarta === segundaCarta) {

        firstCard.firstChild.classList.add('disabledCard')
        secondCard.firstChild.classList.add('disabledCard')

        firstCard = ''
        secondCard = ''

        checkVictory()
    }
    else {

        setTimeout(() => {
            firstCard.classList.remove('revelarCarta')
        secondCard.classList.remove('revelarCarta')

        firstCard = ''
        secondCard = ''
        }, 500)

    }
}


function revealCard({ target }) {
  if (target.parentNode.className.includes("revelarCarta")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("revelarCarta");
    firstCard = target.parentNode
  }
  else if (secondCard === '') {
    target.parentNode.classList.add("revelarCarta");
    secondCard = target.parentNode

    checkCards()
  }
}

function createElement(tag, className) {
  const newTag = document.createElement(tag);
  newTag.className = className;
  return newTag;
}

function createCard(cardNumber) {
  const card = createElement("div", "card");
  const front = createElement("div", "front face");
  const back = createElement("div", "back face");

  front.style.backgroundImage = `url('/images/${cardNumber}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute('data-cardNumber', cardNumber)
  return card;
}

function loadGame() {
  const duplicateCards = [...cardList, ...cardList];

  const shuffledArray = duplicateCards.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((oneCard) => {
    const card = createCard(oneCard);
    grid.appendChild(card);
  });

  
}

function startTime () {

  this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML
        timer.innerHTML =  currentTime + 1
    }, 1000)
}

window.onload = () => {
    loadGame();
    startTime()
    const playerName = localStorage.getItem('UserName')
    playerNameCamp.innerHTML = playerName
}


console.log(this)