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
    }, 3000);
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

    const discordIcon = document.getElementById("discord");
    const discordLog = document.getElementById("discordLog");
  
    const msgIcon = document.getElementById("messages");
    const msgPop = document.getElementById("msgPop");

    const chromeIcon = document.getElementById("chrome");
    const ytVid = document.getElementById("ytVid");
  
    const randomDelay = Math.random() * (10000 - 5000) + 5000;

    let clicked = {
      discordIcon: false,
      msgIcon: false,
      chromeIcon: false
    };

    function checkAllClicked() {
      if (clicked.discordIcon && clicked.msgIcon && clicked.chromeIcon) {
        triggerGridAppear();
      }
    }

    function triggerGridAppear() {
      const gridItems = Array.from(document.querySelectorAll('.grid-item'));
      
      gridItems.sort((a, b) => {
        const idA = parseInt(a.querySelector('img').id, 10);
        const idB = parseInt(b.querySelector('img').id, 10);
        return idB - idA; 
      });
      
      const baseDelay = 9000;
      let delay = baseDelay;
    
      const sounds = [
        'sounds/ding-sound-effect_2.mp3',
        'quiet-urge/sounds/discord-call-sound.mp3',
        'quiet-urge/sounds/discord-notification.mp3',
        'quiet-urge/sounds/error_CDOxCYm.mp3',
        'quiet-urge/sounds/facetime.mp3',
        'quiet-urge/sounds/kai-bomboclat.mp3',
        'quiet-urge/sounds/mustardddddddd.mp3',
        'quiet-urge/sounds/outlook_jjD4Xg8.mp3',
        'quiet-urge/sounds/vine-boom.mp3',
        'quiet-urge/sounds/among-us-role-reveal-sound.mp3',
        'quiet-urge/sounds/rat-dance-music.mp3',
        'quiet-urge/sounds/yippeeeeeeeeeeeeee.mp3',
        'quiet-urge/sounds/sad-meow-song.mp3'
      ];
    
      let totalSoundsPlayed = 0;
      let lastItemTime = 0;
    
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
          
          const sound = new Audio(sounds[index % sounds.length]);
          sound.play();
    
          totalSoundsPlayed++;
    
          // Optionally play a random sound for every other item
          if (index % 2 === 0) {
            const randomSoundIndex = Math.floor(Math.random() * sounds.length);
            const randomSound = new Audio(sounds[randomSoundIndex]);
            randomSound.play();
            totalSoundsPlayed++;
          }
    
          // Track the last item appearance time
          if (index === gridItems.length - 1) {
            lastItemTime = Date.now();
          }
    
        }, delay);
        
        delay *= 0.8;
      });
    
      // Check if all items are visible and navigate 1 second after the last one appears
      const checkVisibilityAndNavigate = setInterval(() => {
        if (Date.now() - lastItemTime >= 1000 && totalSoundsPlayed >= gridItems.length) {
          clearInterval(checkVisibilityAndNavigate);
          window.location.href = "reflection.html"; // Change page after 1 second
        }
      }, 100);
    }
    
    
    
  
    setTimeout(() => {
      loadedBg.style.opacity = "1";
    }, randomDelay);
  
    let iconsVisible = 0;
  
    appIcons.forEach((appIcon, index) => {
      setTimeout(() => {
        appIcon.style.opacity = "1";
        imgPlace[index].style.opacity = "0";
  
        iconsVisible++;
  
        if (iconsVisible === appIcons.length) {
          discordIcon.classList.add("bounce");
  
          setTimeout(() => {
            msgIcon.classList.add("bounce");
          }, 4000);

          setTimeout(() => {
            chromeIcon.classList.add("bounce");
          }, 7000);
        }
      }, randomDelay + Math.random() * 15000);
    });
  
    discordIcon.addEventListener("click", () => {
      if (!clicked.discordIcon) {
        clicked.discordIcon = true;
        checkAllClicked();
      }
    
      discordIcon.classList.toggle("bounce");
      discordIcon.style.animation = discordIcon.classList.contains("bounce") ? "bounce 1s infinite" : "";
      discordLog.style.opacity = "1";
    });
    
    msgIcon.addEventListener("click", () => {
      if (!clicked.msgIcon) {
        clicked.msgIcon = true;
        checkAllClicked();
      }
    
      msgIcon.classList.toggle("bounce");
      msgIcon.style.animation = msgIcon.classList.contains("bounce") ? "bounce 1s infinite" : "";
      setTimeout(() => {
        msgPop.style.opacity = "1";
      }, 300);
    });
    
    chromeIcon.addEventListener("click", () => {
      if (!clicked.chromeIcon) {
        clicked.chromeIcon = true;
        checkAllClicked();
      }
    
      chromeIcon.classList.toggle("bounce");
      chromeIcon.style.animation = chromeIcon.classList.contains("bounce") ? "bounce 1s infinite" : "";
      setTimeout(() => {
        ytVid.style.opacity = "1";
      }, 300);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("end-text");
    const sentences = [
      "What happens to your mind when you have to wait for something to load? Do you notice your thoughts drifting, or do you actively try to fill the space with something else?",
      "In a world where everything is designed to be immediate, what is lost when we don't have to wait anymore? Is there value in those moments of stillness?", "Are we truly ‘present’?", "The most valuable thing we can give in an age where everything demands our attention is our ability to take back moments of stillness and reflection."
    ];
  
    animateAll(textElement, sentences, {
      duration: 2000,
      settleSpeed: 50,
      frameRate: 15,
      initialLingerTime: 5
    }, () => {
    
    let startTime = Date.now();
    
    const timerElement = document.getElementById("timer");
  
    setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `${elapsedTime}s`;
    }, 1000);
  
    });
  });