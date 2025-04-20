
const sentences = ["This may take a moment...", "Just a bit more...", "Well, this is getting a little awkward...", "Ah! Here we go!"];
const duration = 2000;
const settleSpeed = 50;
const frameRate = 15;
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const textElement = document.getElementById("text");
let lingerTime = 2000;

function animateSentence(sentence, lingerTime, onComplete) {
  let currentText = Array.from({ length: sentence.length }, () => " ");
  
  const shuffleInterval = setInterval(() => {
    currentText = currentText.map((_, i) =>
      sentence[i] === " " ? " " : characters[Math.floor(Math.random() * characters.length)]
    );
    textElement.textContent = currentText.join("");
  }, 1000 / frameRate);

  setTimeout(() => {
    clearInterval(shuffleInterval);
    let i = 0;
    const settleInterval = setInterval(() => {
      currentText[i] = sentence[i];
      textElement.textContent = currentText.join("");
      i++;
      if (i >= sentence.length) {
        clearInterval(settleInterval);
        setTimeout(onComplete, lingerTime);
      }
    }, settleSpeed);
  }, duration);
}

function animateAll(sentences) {
  let index = 0;
  function next() {
    if (index < sentences.length) {
      textElement.style.opacity = 0;

      const currentLingerTime = lingerTime;
      lingerTime += 500;

      setTimeout(() => {
        textElement.textContent = sentences[index];
        textElement.style.opacity = 1;

        animateSentence(sentences[index], currentLingerTime, () => {
          index++;
          setTimeout(next, 1000);
        });
      }, 500);
    }
  }
  next();
}

animateAll(sentences);
