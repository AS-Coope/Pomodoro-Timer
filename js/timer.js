// variable initialization
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const ONE_SECOND_IN_MILLISECONDS = 1000;
const TIMER_MAX_VALUE = 10 * ONE_SECOND_IN_MILLISECONDS; // 10 seconds
let isPaused = true;
let currentTimerValue = TIMER_MAX_VALUE;

// 1. Click play btn
playBtn.addEventListener('click', () => {
    changePlayBtn();
    /*     console.log(isPaused);
        console.log(currentTimerValue);
     */
    /*     if (isPaused === false) {
            setInterval(() => {
                console.log(currentTimerValue);
                currentTimerValue = currentTimerValue - 1000;
                if (currentTimerValue === 0) {
                    alert("Timer Done!");
                S}
            }, 1000); // figure out how to stop interval
}
*/
    /*     while (isPaused === false & currentTimerValue > 0) {
            console.log(currentTimerValue);
        }
     */
});

function changePlayBtn() {
    isPaused = !isPaused;
    isPaused === false ? playBtn.textContent = "Click to Pause" : playBtn.textContent = "Click to Play";
}

// 2. Start timer
// 3. Play button icon converts to pause button icon
// 4. Reset button is always beside play button
// 4a. It should not do anything to the timer
//     once the timer has not been started
//     (functionality that can be added later is that
//     the button can be greyed out or disabled once the timer
//     is not started)
// 5. Timer should tick down to the end or until the pause btn is hit
// 5a. If pause button is hit, then the pause button icon changes to
//     a play button icon and the timer stops ticking down.
//     Reset button will still be active
// 5b. If pause button is not hit, then the timer will tick down
//     to zero minutes, zero seconds.
