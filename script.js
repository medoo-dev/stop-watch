let [start, stop, reset] = document.querySelectorAll(".btns button");
let [hours, minutes, seconds] = document.querySelectorAll("p span");

let second = 0;
let minute = 0;
let hour = 0;
let secondInterval;
let minuteInterval;
let hourInterval;
let state = true;
start.addEventListener("click", () => {
  if (state) {
    secondInterval = setInterval(() => {
      second++;
      seconds.textContent = `0${second}`;
      if (second > 9) seconds.textContent = second;
      if (second > 59) second = 0;
    }, 1000);
    minuteInterval = setInterval(() => {
      minute++;
      minutes.textContent = `0${minute}`;
      if (minute > 9) minutes.textContent = minute;
      if (minute > 59) minute = 0;
    }, 60000);
    hourInterval = setInterval(() => {
      hour++;
      hours.textContent = `0${hour}`;
      if (hour > 9) hours.textContent = hour;
    }, 86_400_00);
  }
  state = false;
});

function interv(text, value) {
  text.textContent = `0${value}`;
  if (value > 9) text.textContent = value;
  if (value > 59) value = 0;
}

stop.addEventListener("click", () => {
  clear();
  state = true;
});

reset.addEventListener("click", () => {
  state = true;
  clear();
  second = 0;
  minute = 0;
  hour = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
});

function clear() {
  clearInterval(secondInterval);
  clearInterval(minuteInterval);
  clearInterval(hourInterval);
}
