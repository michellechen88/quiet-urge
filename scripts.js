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
  
  let startTime = Date.now();
  
  const timerElement = document.getElementById("timer");

  setInterval(() => {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerElement.textContent = `${elapsedTime}s`;
  }, 1000);

});

document.addEventListener("DOMContentLoaded", () => {
    let startTime = Date.now();
  
    const timerElement = document.getElementById("timer");
  
    setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `${elapsedTime}s`;
    }, 1000);
  });  

  document.addEventListener("DOMContentLoaded", () => {
    const tBar = document.getElementById("timerBar");
    const timerElement = document.getElementById("timer");
  
    if (tBar && timerElement) {
      timerElement.style.opacity = "0";
  
      requestAnimationFrame(() => {
        tBar.style.opacity = "1";
        tBar.style.width = "100%";
      });
  
      setTimeout(() => {
        tBar.style.opacity = "0";
        timerElement.style.opacity = "1";
      }, 3500); 
    }
  
    let startTime = Date.now();
    setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `${elapsedTime}s`;
    }, 1000);
  });  

  // bg appear in desktop.html
  document.addEventListener("DOMContentLoaded", () => {
    const loadedBg = document.getElementById("loaded-bg");
    const appIcons = document.querySelectorAll("#actualApp");
    const imgPlace = document.querySelectorAll("#imgPH");
  
    const randomDelay = Math.random() * (10000 - 5000) + 5000; // 5-10 seconds
  
    setTimeout(() => {
      loadedBg.style.opacity = "1";
    }, randomDelay);

    appIcons.forEach((appIcon, index) => {
    setTimeout(() => {
      appIcon.style.opacity = "1";
      imgPlace[index].style.opacity = "0";
    }, randomDelay + Math.random() * 8000);
    });
  });
  