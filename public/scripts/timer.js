// Get the Setting, Minutes and Seconds elements. Declare a toggleSettings variable to keep track of the click of the settings button.
const progressBar = document.querySelector(".outerRing"),
  minElem = document.querySelector("#minutes"),
  secElem = document.querySelector("#seconds"),
  startStop = document.querySelector("#stsp"),
  setting = document.querySelector("#setting");

// Declare minutes and seconds as let variables, as will then manipulate these for the timer display.
let minutes = document.querySelector("#minutes").innerHTML,
  seconds = document.querySelector("#seconds").innerHTML,
  progress = null,
  progressStart = 0,
  progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
  speed = 1000,
  degTravel = 360 / progressEnd,
  toggleSettings = false,
  secRem = 0,
  minRem = 0;

// Using conic-gradient() and the calculated deg/sec, update the DOM.
function progressTrack() {
  progressStart++;

  secRem = Math.floor((progressEnd - progressStart) % 60);
  minRem = Math.floor((progressEnd - progressStart) / 60);

  secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
  minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

  progressBar.style.background = `conic-gradient(
        #9d0000 ${progressStart * degTravel}deg,
        #17171a ${progressStart * degTravel}deg
      )`;
  if (progressStart == progressEnd) {
    progressBar.style.background = `conic-gradient(
        #00aa51 360deg,
        #00aa51 360deg
      )`;
    clearInterval(progress);
    startStop.innerHTML = "START";
    progress = null;
    progressStart = 0;
  }
}

// use setInterval() to run the code that helps track the progress.
function startStopProgress() {
  if (!progress) {
    progress = setInterval(progressTrack, speed);
  } else {
    clearInterval(progress);
    progress = null;
    progressStart = 0;
    progressBar.style.background = `conic-gradient(
        #17171a 360deg,
        #17171a 360deg
      )`;
  }
}

function resetValues() {
  if (progress) {
    clearInterval(progress);
  }
  minutes = document.querySelector("#minutes").innerHTML;
  seconds = document.querySelector("#seconds").innerHTML;
  toggleSettings = false;
  minElem.contentEditable = false;
  minElem.style.borderBottom = `none`;
  secElem.contentEditable = false;
  secElem.style.borderBottom = `none`;
  progress = null;
  progressStart = 0;
  progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
  degTravel = 360 / progressEnd;
  progressBar.style.background = `conic-gradient(
        #17171a 360deg,
        #17171a 360deg
      )`;
}
// When click the START button, first will check for minutes and seconds not equal to 0. Then the text will change to STOP and call the startStopProgress function.

// The startStopProgress the function will check the timer progress and update the progress bar and the timer display.

// If the STOP button, use the same function to clear the progress and change the text back to START.
startStop.onclick = function () {
  if (startStop.innerHTML === "START") {
    if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
      startStop.innerHTML = "STOP";
      startStopProgress();
    } else {
      alert("Enter the Time Value in your Timer!");
    }
  } else {
    startStop.innerHTML = "START";
    startStopProgress();
  }
};
// Handle the click event on the Settings button. Handle the onblur event for the Minutes and Seconds elements.
setting.onclick = function () {
  if (!toggleSettings) {
    toggleSettings = true;
    minElem.contentEditable = true;
    minElem.style.borderBottom = `1px dashed #ffffff50`;
    secElem.contentEditable = true;
    secElem.style.borderBottom = `1px dashed #ffffff50`;
  } else {
    resetValues();
  }
};
// Create function resetValues to handle the values getting reassigned for minutes and seconds.
minElem.onblur = function () {
  resetValues();
};

secElem.onblur = function () {
  resetValues();
};