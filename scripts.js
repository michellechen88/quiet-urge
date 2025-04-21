
const sentences = ["This may take a moment...", "Just a bit more...", "Well, this is getting a little awkward...", "Ah! Here we go!"];
const duration = 2000;
const settleSpeed = 50;
const frameRate = 15;
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const textElement = document.getElementById("text");
let lingerTime = 10;

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
      lingerTime += 1500;

      setTimeout(() => {
        textElement.textContent = sentences[index];
        textElement.style.opacity = 1;

        animateSentence(sentences[index], currentLingerTime, () => {
          index++;
          setTimeout(next, 1000);
        });
      }, 500);
    } else {
        setTimeout(() => {
            document.getElementById("prime-1").style.display = "none";
            document.getElementById("userLog").style.display = "flex";

            const pfp = document.getElementById("pfp");
            pfp.style.opacity = "0";

            setTimeout(() => {
                pfp.style.opacity = "1";
            }, 5000);
          }, 2500);
        }
      }
  next();
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("userInput");
    const button = document.getElementById("submit");
  
    button.addEventListener("click", () => {
      console.log("Submitted:", input.value);
      input.value = "";

      window.location.href = "desktop.html";
    });
  });

animateAll(sentences);