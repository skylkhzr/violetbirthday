// animation.js

// Generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Create a balloon
function createBalloon() {
  const colors = ['red', 'green', 'blue', 'pink', 'purple', 'yellow'];
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = colors[getRandomNumber(0, colors.length)];
  balloon.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
  document.body.appendChild(balloon);

  // Animate the balloon
  setTimeout(() => {
    balloon.style.transform = 'translateY(-200%)';
  }, getRandomNumber(100, 5000));
}

// Create multiple balloons
function createBalloons(count) {
  for (let i = 0; i < count; i++) {
    createBalloon();
  }
}

// Create fireworks
function createFireworks() {
  const colors = ['#FF4136', '#FFDC00', '#7FDBFF', '#01FF70', '#B10DC9', '#111111'];
  const fireworks = document.createElement('div');
  fireworks.classList.add('fireworks');
  fireworks.style.backgroundColor = colors[getRandomNumber(0, colors.length)];
  fireworks.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
  fireworks.style.bottom = '0';
  document.body.appendChild(fireworks);

  // Animate the fireworks
  setTimeout(() => {
    fireworks.style.transform = 'translateY(-100%)';
    fireworks.style.opacity = '0';
  }, getRandomNumber(100, 5000));
}

// Create confetti
function createConfetti() {
  const colors = ['#FF4136', '#FFDC00', '#7FDBFF', '#01FF70', '#B10DC9', '#111111'];
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = colors[getRandomNumber(0, colors.length)];
  confetti.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
  confetti.style.top = '0';
  document.body.appendChild(confetti);

  // Animate the confetti
  setTimeout(() => {
    confetti.style.transform = 'translateY(100%)';
    confetti.style.opacity = '0';
  }, getRandomNumber(100, 5000));
}

// Create multiple confetti
function createConfettis(count) {
  for (let i = 0; i < count; i++) {
    createConfetti();
  }
}

// Call the animation functions
createBalloons(10);
createConfettis();
createFireworks();
