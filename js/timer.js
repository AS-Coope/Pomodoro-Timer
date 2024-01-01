// variable initialization
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const timerScrn = document.querySelector(".timer-screen");
const playImg = document.querySelector("#play-btn img");
const resetImg = document.querySelector("#reset-btn img");
const PLAY_IMG_SRC = "img/play-media-ctrl.png";
const PAUSE_IMG_SRC = "img/pause-media-ctrl.png";
const RESET_IMG_SRC = "img/replay-media-ctrl.png";
const ONE_SECOND_IN_MILLISECONDS = 1000;
const ONE_MINUTE_IN_MILLISECONDS = 60 * ONE_SECOND_IN_MILLISECONDS;
const ONE_MINUTE_IN_SECONDS = 60;
const TOTAL_NUM_OF_MINUTES = 0.1;
const TIMER_MAX_VALUE = TOTAL_NUM_OF_MINUTES * ONE_MINUTE_IN_MILLISECONDS; // 10 seconds
let isTicking = false;
let currentMaxTimeInMs = TIMER_MAX_VALUE;
let intervalId;

initializePage();
// 1. Click play btn
playBtn.addEventListener('click', () => {

    if (currentMaxTimeInMs === 0) {
        // here, timer should be reset and button changed back to play button
        console.log("Timer is complete");
        alert("Timer is complete!");
    } else {
        changePlayBtn();
        // 2. Start timer
        if (isTicking === true) {
            intervalId = setInterval(() => {
                currentMaxTimeInMs = currentMaxTimeInMs - ONE_SECOND_IN_MILLISECONDS;

                calculateCurrentTime(currentMaxTimeInMs);

                if (currentMaxTimeInMs === 0) {
                    console.log("Timer Done!");
                    clearInterval(intervalId);
                    // 3. Play button icon converts to pause button icon
                    changePlayBtn();
                    alert("Time Complete!");
                }
            }, ONE_SECOND_IN_MILLISECONDS);
        } else {
            clearInterval(intervalId);
        }

    }
});

resetBtn.addEventListener('click', () => {
    // check if currentMaxTimeInMs = TIMER_MAX_VALUE (no resetting required since timer isn't started)
    if (currentMaxTimeInMs === TIMER_MAX_VALUE) {
        console.log("Nothing doing, timer hasn't started")
    }
    else if (intervalId === undefined) {
        console.log("Timer hasn't started to count down yet");
    } else {
        clearInterval(intervalId);
        currentMaxTimeInMs = TIMER_MAX_VALUE;
        calculateCurrentTime(currentMaxTimeInMs);
        if (isTicking === true) {
            changePlayBtn(); // the button must not still be showing that the timer is playing/ticking
        }
    }
});

function changePlayBtn() {
    isTicking = !isTicking;
    if (isTicking === true) {
        playImg.setAttribute("src", `${PAUSE_IMG_SRC}`);
        playImg.setAttribute("alt", "Image of Pause Button");
    } else {
        playImg.setAttribute("src", `${PLAY_IMG_SRC}`);
        playImg.setAttribute("alt", "Image of Play Button");
    }
}

function setTimerText(elem, timerValue) {
    elem.textContent = timerValue;
}

function calculateCurrentTime(maxTime) {
    const seconds = Math.floor((maxTime / ONE_SECOND_IN_MILLISECONDS) % 60);
    const minutes = Math.floor(maxTime / (ONE_SECOND_IN_MILLISECONDS * ONE_MINUTE_IN_SECONDS));
    setTimerText(timerScrn, `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

function initializePage() {
    // timer appears on screen with correct time on start up
    calculateCurrentTime(currentMaxTimeInMs);
}