const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 20000;
const breatheTime = totalTime / 5;
const holdTime = totalTime / 2.86;

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
