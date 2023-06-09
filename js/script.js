console.log("JSOK");

// Recupero gli elementi dal DOM

const countdownElement = document.getElementById("countdown");
const numberElement = document.getElementById("number");
const cardElement = document.getElementById("card");
const message = document.getElementById("message");

// Dichiarazioni
const numbersToGenerate = 5;
let seconds = 30;
countdownElement.innerText = seconds;
let numberUser = [];
let numbers = [];
let score = 0;
// Generiamo i numeri random

function randomNumber() {
  for (i = 0; i < numbersToGenerate; i++) {
    do {
      numbersRandom = Math.floor(Math.random() * 100) + 1;
    } while (numbers.includes(numbersRandom));
    numbers.push(numbersRandom);
    numberElement.innerHTML += ` <div class="mx-5">${numbers[i]}</div>`;
  }

  return numbers;
}
console.log(randomNumber());

// Creaiamo il Countdown

let countdown = setInterval(() => {
  countdownElement.innerText = --seconds;
  if (seconds === 0) {
    clearInterval(countdown);
    cardElement.classList.add("d-none");
    setTimeout(function () {
      for (i = 0; i < numbersToGenerate; i++) {
        let valueUser = parseInt(prompt("Seleziona un numero da 1 a 99"));
        numberUser.push(valueUser);
        if (numberUser.includes(numbers[i])) {
          score++;
        }
      }
      console.log(numberUser);
      message.innerHTML = `Hai totalizzato ${score} punti!`;
    }, 200);
  }
}, 1000);
