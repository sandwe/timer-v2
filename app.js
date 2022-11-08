const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timeInputs = document.querySelectorAll("input");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

function calcTime() {
  const valHours = parseInt(hours.value) || 0;
  const valMinutes = parseInt(minutes.value) || 0;
  const valSeconds = parseInt(seconds.value) || 0;

  const secTotal = valHours * 3600 + valMinutes * 60 + valSeconds - 1;

  const newHours = Math.floor(secTotal / 3600);
  const newMinutes = Math.floor((secTotal % 3600) / 60);
  const newSeconds = Math.floor((secTotal % 3600) % 60);

  hours.value = `${newHours}`.padStart(2, "0");
  minutes.value = `${newMinutes}`.padStart(2, "0");
  seconds.value = `${newSeconds}`.padStart(2, "0");
}

function startTimer() {
  setInterval(calcTime, 1000);
}

// 시작 버튼을 누르면 타이머 작동
btnStart.addEventListener("click", () => {
  startTimer();
});

timeInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    const value = parseInt(input.value) || 0;
    input.value = `${value}`.padStart(2, "0");
  });
});
