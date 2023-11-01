const hour_content = document.querySelector('.hour')
const minute_content = document.querySelector('.minute')
const second_content = document.querySelector('.second')
let countdown
function timer(totalSeconds) {
    displayTime(totalSeconds)
    const now = Date.now()
    const then = now + totalSeconds * 1000;
    clearInterval(totalSeconds)

    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000)
        displayTime(secondsLeft)
    }, 1000)
}

function displayTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds %= 60
    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    hour_content.innerHTML = `${hours<10?'0':''}${hours}`;
    minute_content.innerHTML=`${minutes<10?'0':''}${minutes}`;
    second_content.innerHTML= `${seconds<10?'0':''}${seconds}`;

}
window.onload = function () {
    const hours = 4
    const minutes = 54
    const seconds = 32
    const totalSeconds = (((hours * 60) * 60) + minutes * 60 + seconds);
    timer(totalSeconds)
}