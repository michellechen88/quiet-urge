import { animateAll } from './scrambler.js';

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("text");
  const sentences = [
    "This may take a moment...",
    "Just a bit more...",
    "Well, this is getting a little awkward...",
    "Ah! Here we go!"
  ];

  animateAll(textElement, sentences, {
    duration: 2000,
    settleSpeed: 50,
    frameRate: 15,
    initialLingerTime: 10
  }, () => {
    document.getElementById("prime-1").style.display = "none";
    document.getElementById("userLog").style.display = "flex";

    const pfp = document.getElementById("pfp");
    pfp.style.opacity = "0";

    setTimeout(() => {
      pfp.style.opacity = "1";
    }, 5000);
  });

  const input = document.getElementById("userInput");
  const button = document.getElementById("submit");

  button.addEventListener("click", () => {
    console.log("Submitted:", input.value);
    input.value = "";
    window.location.href = "desktop.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
    let startTime = Date.now(); // Capture the time when the page loads
  
    const timerElement = document.getElementById("timer");
  
    setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Time in seconds
      timerElement.textContent = `${elapsedTime}s`;
    }, 1000);
  });  