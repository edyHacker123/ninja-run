const ground1 = document.querySelector(".ground1");
const ground2 = document.querySelector(".ground2");
const ninja = document.querySelector(".ninja");
const body = document.querySelector("body");
const counter = document.querySelector(".counter");
let heart1 = document.querySelector(".heart1");
let heart2 = document.querySelector(".heart2");
let heart3 = document.querySelector(".heart3");
let castel = document.querySelector(".castel");
let hearthWrapper = document.querySelector(".heart-wrapper");
const gameOver = document.querySelector(".game-over-wrapper");
const zombiesKilled = document.querySelector(".zombiesKilled");
const retry = document.querySelector(".retry");
const win = document.querySelector(".win");
const lose = document.querySelector(".game-over");
const startWrapper = document.querySelector(".start");
const startButton = document.querySelector(".start-button");

let press = true;
let lifes = 2;
let variable = true;
let gameStart = true;
let zombieSpawn = false;

ground1.style.left = "0px";
ground2.style.left = "1919px";
ninja.style.right = "1500px";
castel.style.right = "-950px";

let globalZombie = "";
let globalProgress = "";
let globalLifeBar = "";
let hitDamage = 50;
let heartsArray = [heart1, heart2, heart3];

const run = [
  "./images/run1.png",
  "./images/run2.png",
  "./images/run3.png",
  "./images/run4.png",
  "./images/run5.png",
  "./images/run6.png",
  "./images/run7.png",
  "./images/run8.png",
  "./images/run9.png",
  "./images/run10.png",
];
const runZombie = [
  "./images/Walk1.png",
  "./images/Walk2.png",
  "./images/Walk3.png",
  "./images/Walk4.png",
  "./images/Walk5.png",
  "./images/Walk6.png",
  "./images/Walk7.png",
  "./images/Walk8.png",
  "./images/Walk9.png",
  "./images/Walk10.png",
];

setInterval(() => {
  for (let i = 0; i < run.length; i++) {
    setTimeout(() => {
      ninja.src = run[i];
    }, i * 40);
  }
}, 400);

setInterval(() => {
  if (lifes > -1 && zombieSpawn) {
    createZombie();
  }
}, 5000);

for (let index = 0; index < window.innerWidth; index++) {
  setTimeout(() => {
    ground1.style.left = parseInt(ground1.style.left) - 1 + "px";
    if (parseInt(ground1.style.left) === -1919 && variable === true) {
      ground1.style.left = "1919px";
      groundMove(ground1);
    }
  }, 4 * index);
}

for (let index = 0; index < window.innerWidth * 2; index++) {
  setTimeout(() => {
    ground2.style.left = parseInt(ground2.style.left) - 1 + "px";
    if (parseInt(ground2.style.left) === -1919 && variable === true) {
      ground2.style.left = "1919px";
      groundMove(ground2);
    }
  }, 4 * index);
}

const createZombie = () => {
  const image = document.createElement("img");
  const lifeBar = document.createElement("div");
  lifeBar.classList.add("bar-life");
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.style.width = "100%";
  lifeBar.appendChild(progressBar);
  lifeBar.style.right = image.style.right;
  image.src = "./images/Walk1.png";
  image.style.right = "-120px";
  image.classList.add("zombie");
  body.appendChild(image);
  body.appendChild(lifeBar);
  globalZombie = image;
  globalProgress = progressBar;
  globalLifeBar = lifeBar;

  setInterval(() => {
    for (let i = 0; i < runZombie.length; i++) {
      setTimeout(() => {
        image.src = runZombie[i];
      }, i * 40);
    }
  }, 400);

  for (let i = 0; i < window.innerWidth + 120; i++) {
    setTimeout(() => {
      if (parseInt(ninja.style.right) - parseInt(image.style.right) === 0) {
        console.log(globalZombie.style.display);
        setTimeout(() => {
          if (globalZombie.style.display !== "none") {
            heartsArray[lifes].style.visibility = "hidden";
            lifes--;
            if (lifes === -1) {
              gameOver.style.visibility = "visible";
              win.style.visibility = "hidden";
              lose.style.visibility = "visible";
              ninja.style.visibility = "hidden";
              zombiesKilled.style.visibility = "hidden";
              retry.style.visibility = "visible";
              counter.style.visibility = "hidden";
            }
          }
        }, 500);
      }
      image.style.right = parseInt(image.style.right) + 1 + "px";
      lifeBar.style.right = parseInt(image.style.right) + 1 + "px";
    }, i * 2);
  }
};

const groundMove = (ground) => {
  for (let index = 0; index < window.innerWidth * 2; index++) {
    setTimeout(() => {
      ground.style.left = parseInt(ground.style.left) - 1 + "px";
      if (parseInt(ground.style.left) === -1919) {
        ground.style.left = "1919px";
        groundMove(ground);
      }
    }, 4 * index);
  }
};

const castleMove = () => {
  for (let i = 0; i < 1150; i++) {
    setTimeout(() => {
      castel.style.right = parseInt(castel.style.right) + 1 + "px";
    }, i * 4);
  }
};

window.addEventListener("keydown", (event) => {
  if (event.key === "e" && press) {
    press = false;
    let create = true;
    const image = document.createElement("img");
    image.src = "./images/shuriken.webp";
    image.style.right = "1650px";
    image.style.transform = "rotate(0deg)";
    image.classList.add("shuriken");
    body.appendChild(image);

    let shurikenDeg = 0;
    setInterval(() => {
      image.style.transform = `rotate(${shurikenDeg}deg)`;
      shurikenDeg++;
    }, 0.0001);
    image.style.visibility = "visible";
    for (let i = 0; i < window.innerWidth; i++) {
      setTimeout(() => {
        if (image.style.display !== "none") {
          image.style.right = parseInt(image.style.right) - 1 + "px";
        }

        if (
          parseInt(image.style.right) - parseInt(globalZombie.style.right) <
            0 &&
          create &&
          globalZombie.style.display !== "none"
        ) {
          image.style.display = "none";
          if (parseInt(globalProgress.style.width) - hitDamage >= 0) {
            globalProgress.style.width =
              parseInt(globalProgress.style.width) - hitDamage + "%";
            create = false;
          } else {
            globalProgress.style.width = "0%";
            create = false;
          }
        }
        if (
          parseInt(globalProgress.style.width) <= 0 &&
          globalLifeBar.style.display !== "none"
        ) {
          globalZombie.style.display = "none";
          globalLifeBar.style.display = "none";
          hitDamage = hitDamage - 5;
          counter.innerHTML = parseInt(counter.innerHTML) - 1;
          if (parseInt(counter.innerHTML) === 0) {
            castleMove();
            counter.style.visibility = "hidden";
            zombiesKilled.style.visibility = "hidden";
            heart1.style.visibility = "hidden";
            heart2.style.visibility = "hidden";
            heart3.style.visibility = "hidden";
            win.style.visibility = "visible";
            lose.style.visibility = "hidden";
            zombieSpawn = false;
            gameOver.style.visibility = "visible";
            retry.style.visibility = "visible";
          }
        }
        if (parseInt(image.style.right) === window.innerWidth) {
          body.removeChild(image);
        }
      }, i * 0.9);
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "e") {
    press = true;
  }
});
retry.addEventListener("click", () => {
  lifes = 2;
  zombiesKilled.style.visibility = "visible";
  heart1.style.visibility = "visible";
  heart2.style.visibility = "visible";
  heart3.style.visibility = "visible";
  ninja.style.visibility = "visible";
  gameOver.style.visibility = "hidden";
  retry.style.visibility = "hidden";
  counter.innerHTML = "10";
  counter.style.visibility = "visible";
  zombieSpawn = true;
  win.style.visibility = "hidden";
  lose.style.visibility = "hidden";
  castel.style.right = "-950px";
});

startButton.addEventListener("click", () => {
  startButton.style.visibility = "hidden";
  startWrapper.style.display = "none";
  counter.style.visibility = "visible";
  zombiesKilled.style.visibility = "visible";
  hearthWrapper.style.visibility = "visible";
  ninja.style.visibility = "visible";
  zombieSpawn = true;
});
