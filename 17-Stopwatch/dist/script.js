const startButton = document.querySelector('.startButton')
const resetButton = document.querySelector('.resetButton')
const stopButton = document.querySelector('.stopButton')
const timeSection = document.querySelector('.timeSection')


let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

startButton.addEventListener('click', (e) => {
    clearInterval(interval);
    timeSection.classList.remove('animate-bounce');
    interval = setInterval(() => {
        if (milliSeconds > 100) {
            seconds++;
            milliSeconds = 0
        }

        if (seconds >= 60) {
            minutes++
            seconds = 0
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0
        }
        timeSection.innerHTML = `
        ${hours < 10 ? '0' : ''}${hours}:
        ${minutes < 10 ? '0' : ''}${minutes}:
        ${seconds < 10 ? '0' : ''}${seconds}:
        ${milliSeconds < 10 ? '0' : ''}${milliSeconds}`

        milliSeconds++;
        // console.log(++seconds);
    }, 10)
})

stopButton.addEventListener('click', (e) => {
    clearInterval(interval)
    timeSection.classList.add('animate-bounce');
})

resetButton.addEventListener('click', (e) => {
    
    timeSection.classList.remove('animate-bounce');
    clearInterval(interval)
    timeSection.innerHTML = `00:00:00:00`
    seconds = 0;
    minutes = 0;
    hours = 0;
})