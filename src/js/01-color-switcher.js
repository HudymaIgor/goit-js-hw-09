const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const backgroundColor = document.querySelector("body");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
            
startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
      backgroundColor.style.background = getRandomHexColor();
    //   alert(textContent = getRandomHexColor());
});
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
      backgroundColor.style.background = getRandomHexColor();
    //   alert(textContent = getRandomHexColor());
  }, 1000);
});
stopBtn.addEventListener("click", () => {
        startBtn.disabled = false;
    stopBtn.disabled = true;
  clearInterval(timerId);
});


// startBtn.addEventListener("click", onClick);