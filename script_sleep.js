const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 8000;
const breatheTime = totalTime / 2;
const holdTime = 0;

breatheAnimate();

function breatheAnimate() {
  text.innerHTML = "breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "hold";

    setTimeout(() => {
      text.innerText = "breathe out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimate, totalTime);
