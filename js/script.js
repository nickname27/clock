const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  sec.style = `transform: rotate(${seconds}deg);`;
  min.style = `transform: rotate(${minutes}deg);`;
  hour.style = `transform: rotate(${hours}deg);`;

  hoursNumber.innerHTML = time.getHours() < 10 ? "0" : time.getHours();
  minutesNumber.innerHTML = time.getMinutes() < 10 ? "0" : time.getMinutes();

  setTimeout(() => clock(), 1000);
}

clock();

let links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((item, i, array) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    array.forEach((clicked, index) => {
      clicked.classList.remove("active");
      tabs[index].classList.remove("active");
    });
    item.classList.add("active");
    tabs[i].classList.add("active");
  });
});

const stopwatchHours = document.querySelector(".stopwatch__hours"),
  stopwatchMinutes = document.querySelector(".stopwatch__minutes"),
  stopwatchSeconds = document.querySelector(".stopwatch__seconds"),
  stopwatchBtn = document.querySelector(".stopwatch__btn"),
  stopwatchCont = document.querySelector(".stopwatch__cont"),
  indicator = document.querySelector(".tabsLink__span");

stopwatchBtn.addEventListener("click", () => {
  if (stopwatchBtn.innerHTML == "start") {
    stopwatchBtn.innerHTML = "stop";
    indicator.classList.add("active");
  } else if (stopwatchBtn.innerHTML == "stop") {
    stopwatchBtn.innerHTML = "clear";
    indicator.classList.remove("active");
    indicator.classList.add("active_clear");
    stopwatchCont.classList.add("active");
  } else {
    stopwatchBtn.innerHTML = "start";
    indicator.classList.remove("active_clear");
    stopwatchCont.classList.remove("active");
  }
});

stopwatchCont.addEventListener("click", () => {
  stopwatchBtn.innerHTML = "stop";
});

function stopwatch() {
  setInterval(() => {
    if (stopwatchBtn.innerHTML == "stop") {
      if (stopwatchSeconds.innerHTML < 59) {
        stopwatchSeconds.innerHTML++;
      } else if (stopwatchSeconds.innerHTML == 59) {
        stopwatchSeconds.innerHTML = 0;
        if (stopwatchMinutes.innerHTML < 59) {
          stopwatchMinutes.innerHTML++;
        } else if (stopwatchMinutes.innerHTML == 59) {
          stopwatchMinutes.innerHTML = 0;
          stopwatchHours.innerHTML++;
        }
      }
    } else if (stopwatchBtn.innerHTML == "clear") {
      stopwatchSeconds.innerHTML;
    } else if (stopwatchBtn.innerHTML == "start") {
      stopwatchSeconds.innerHTML = 0;
      stopwatchMinutes.innerHTML = 0;
      stopwatchHours.innerHTML = 0;
    }
  }, 1000);
}
setTimeout(() => {
  stopwatch()
}, 1000);