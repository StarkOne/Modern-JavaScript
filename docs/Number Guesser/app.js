const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const game = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const message = document.querySelector(".message");
let min = 1,
  max = 10,
  winnigNum = getRandomNum(min, max),
  guessesLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click',function(e) {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMesssage(`Please enter a number betweeb ${min} and ${max}`, 'red');
  }

  if(guess === winnigNum) {
    gameOver(true, `${winnigNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;
    
    if(guessesLeft === 0) {
      gameOver(false, `Game Over, you lost. The correct number was ${winnigNum}`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMesssage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
  e.preventDefault();
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMesssage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMesssage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}