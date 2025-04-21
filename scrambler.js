export const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function animateSentence(textElement, sentence, options = {}, onComplete = () => {}) {
    const duration = options.duration || 2000;
    const settleSpeed = options.settleSpeed || 50;
    const frameRate = options.frameRate || 15;
  
    let currentText = Array.from({ length: sentence.length }, () => " ");
    const progressBar = document.getElementById("progressBar");
  
    // Reset and start progress bar
    if (progressBar) {
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";
      void progressBar.offsetWidth; // trigger reflow
      progressBar.style.transition = `width ${duration + sentence.length * settleSpeed}ms linear`;
      progressBar.style.width = "100%";
    }
  
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
          setTimeout(onComplete, options.lingerTime || 2000);
        }
      }, settleSpeed);
    }, duration);
  }  

export function animateAll(textElement, sentences, options = {}, onFinish = () => {}) {
  let index = 0;
  let lingerTime = options.initialLingerTime || 10;

  function next() {
    if (index < sentences.length) {
      textElement.style.opacity = 0;

      const currentLingerTime = lingerTime;
      lingerTime += 1500;

      setTimeout(() => {
        textElement.textContent = sentences[index];
        textElement.style.opacity = 1;

        animateSentence(textElement, sentences[index], {
          ...options,
          lingerTime: currentLingerTime,
        }, () => {
          index++;
          setTimeout(next, 1000);
        });
      }, 500);
    } else {
      onFinish();
    }
  }

  next();
}
