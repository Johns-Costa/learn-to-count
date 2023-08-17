
let selectedPattern = [];
let patternGrid = document.getElementById('patternGrid');
let message = document.getElementById('message');

function generateRandomNumbers(count) {
  let numbers = [];
  while (numbers.length < count) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

let randomNumbers = generateRandomNumbers(10);
console.log(randomNumbers);
let pattern = randomNumbers;
let divElement = [];

for (let i = 0; i < randomNumbers.length; i++) {
  let divId = `div${i + 1}`;
  divElement = document.getElementById(divId);
  divElement.textContent = randomNumbers[i];
}

function addDotToPattern(dotIndex) {
  selectedPattern.push(dotIndex);
  document.querySelector(`[divElement="${dotIndex}"]`);
  console.log(selectedPattern)
}

function clearPattern() {
  selectedPattern = [];
  let dots = document.querySelectorAll('.pattern-dot');
  dots.forEach(dot => dot.style.backgroundColor = '#ccc');
}

function checkPattern() {
  if (selectedPattern.join() === pattern.join()) {
    message.textContent = 'Pattern unlocked!';
    setTimeout(addDotToPattern, 1000);
  } else {
    message.textContent = 'Pattern incorrect. Try again.';
    setTimeout(addDotToPattern, 1000);
  }
}

patternGrid.addEventListener('click', event => {
  let dotIndex = parseInt(event.target.getAttribute('data-index'));
  if (!isNaN(dotIndex)) {
    addDotToPattern(dotIndex);
  }
});


document.getElementById('generate-button').addEventListener('click', addDotToPattern);

document.getElementById('check').addEventListener('click', checkPattern);
