const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timeInputs = document.querySelectorAll("input");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

let intervalId;

function calcTime() {
  const valHours = parseInt(hours.value) || 0;
  const valMinutes = parseInt(minutes.value) || 0;
  const valSeconds = parseInt(seconds.value) || 0;

  const secTotal = valHours * 3600 + valMinutes * 60 + valSeconds - 1;

  if (secTotal === 0) {
    pauseTimer();
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    btnStart.setAttribute("disabled", "");
    btnReset.setAttribute("disabled", "");
    btnStart.classList.toggle("btn-pause");
    return alert("타이머 종료!!");
  }
  const newHours = Math.floor(secTotal / 3600);
  const newMinutes = Math.floor((secTotal % 3600) / 60);
  const newSeconds = Math.floor((secTotal % 3600) % 60);

  hours.value = `${newHours}`.padStart(2, "0");
  minutes.value = `${newMinutes}`.padStart(2, "0");
  seconds.value = `${newSeconds}`.padStart(2, "0");
}

function startTimer() {
  btnStart.textContent = "PAUSE";
  intervalId = setInterval(calcTime, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
  btnStart.textContent = "START";
}

btnStart.addEventListener("click", () => {
  btnStart.classList.toggle("btn-pause");
  intervalId ? pauseTimer() : startTimer();
});

timeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    btnStart.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
    const value = parseInt(input.value) || 0;
    input.value = `${value}`.padStart(2, "0");
  });
});
