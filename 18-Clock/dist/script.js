// !Common
const clockHead = document.querySelector('.clockHead');

setInterval(() => {
    setTimeAnalog();
    setTimeDigital()

    setTimeNeu();
}, 10)


// ! Analog Clock Code

// analog clock queryselector
const analog_container = document.querySelector('.analog-container');
const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

// button
const analogButton = document.querySelector('.analog')

// analog clock button event listener
analogButton.addEventListener('click', (e) => {
    analogButton.classList.add('bg-zinc-600', 'text-white')
    digitalButton.classList.remove('bg-zinc-600', 'text-white')
    neuButton.classList.remove('bg-zinc-600', 'text-white')
    digital_container.style.display = 'none'
    analog_container.style.display = 'flex'
    neu_container.style.display = 'none'
    clockHead.innerHTML = 'Analog'
})

// analog clock time setter function
function setTimeAnalog() {
    const date = new Date()
    const second = date.getSeconds()
    const hour = date.getHours();
    const minute = date.getMinutes();
    secondHand.style.transform = `rotate(${second * 6}deg)`
    minuteHand.style.transform = `rotate(${minute * 6}deg)`
    hourHand.style.transform = `rotate(${hour * 30}deg)`
}




// !Digital Clock Code
// digital clock queryselector
const digitalClockContent = document.querySelector('.digitalClockContent')
const digital_container = document.querySelector('.digital-container');

// button
const digitalButton = document.querySelector('.digital')

// digital clock button event listener
digitalButton.addEventListener('click', (e) => {
    analogButton.classList.remove('bg-zinc-600', 'text-white')
    analogButton.classList.add('bg-zinc-300', 'text-black')
    digitalButton.classList.add('bg-zinc-600', 'text-white')
    neuButton.classList.remove('bg-zinc-600', 'text-white')
    digital_container.style.display = 'flex'
    analog_container.style.display = 'none'
    neu_container.style.display = 'none'

    clockHead.innerHTML = 'Digital'
})

// digital clock time setter function
function setTimeDigital() {
    const date = new Date()
    const hour = date.getHours()
    const second = date.getSeconds();
    const minute = date.getMinutes()
    const ms = Math.round(date.getMilliseconds() / 10);

    digitalClockContent.innerHTML = `<p
    class="w-full text-center text-emerald-400 digital md:text-9xl text-5xl font-['sevenSegment'] flex justify-center items-center md:gap-1"
  >
    ${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second} <sub class="md:text-6xl text-3xl w-[15%]" >${ms}</sub>
  </p>`

}

let count = 0;

// !Neu Clock Code
const neu_container = document.querySelector('.neu-container');

// button
const neuButton = document.querySelector('.neu')
neuButton.addEventListener('click', () => {
    neuButton.classList.add('bg-zinc-600', 'text-white')
    digitalButton.classList.remove('bg-zinc-600', 'text-white')
    analogButton.classList.add('bg-zinc-300', 'text-black')
    analogButton.classList.remove('bg-zinc-600', 'text-white')
    digital_container.style.display = 'none'
    analog_container.style.display = 'none'
    neu_container.style.display = 'flex';

    clockHead.innerHTML = 'Neu Clock'

})

// * Seconds section
const translateYValue = '1';

// !left second section
const SecondsleftStrap = document.querySelector('.SecondsleftStrap')
const SecondsleftNums = SecondsleftStrap.querySelectorAll('.l')
const resetLeftStrapValue = document.querySelector('.neu-container').offsetHeight / 100

function setSecondLeftValue() {
    const date = new Date()
    const secondTensValue = Math.floor(date.getSeconds() / 10)
    // left num for each
    SecondsleftNums.forEach(eachNum => {

        if (eachNum.classList.contains(`l${secondTensValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')

        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })

    SecondsleftStrap.style.transform = `translateY(${translateYValue * -secondTensValue}vmin)`;

    if (secondTensValue === 0) {
        SecondsleftStrap.style.transform = `translateY(-${resetLeftStrapValue}px)`;

    }

}

// !right seconds section
const SecondsrightStrap = document.querySelector('.SecondsrightStrap')
const SecondsrightNums = SecondsrightStrap.querySelectorAll('.r')
const resetRightStrapValue = document.querySelector('.neu-container').offsetHeight / 20

function setSecondRightValue() {
    const date = new Date()
    const secondOnesValue = date.getSeconds() % 10

    // right num for each
    SecondsrightNums.forEach(eachNum => {
        if (eachNum.classList.contains(`r${secondOnesValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')
        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })
    // Update strap positions
    SecondsrightStrap.style.transform = `translateY(${translateYValue * -secondOnesValue}vmin)`;
    if (secondOnesValue === 0) {
        SecondsrightStrap.style.transform = `translateY(${resetRightStrapValue}px)`;
    }
}


// * Minutes section

const MinutestranslateYValue = '2';
// !left minute section
const MinutesleftStrap = document.querySelector('.MinutesleftStrap')
const MinutesleftNums = MinutesleftStrap.querySelectorAll('.l')

function setMinuteLeftValue() {
    const date = new Date()
    const minuteTensValue = Math.floor(date.getMinutes() / 10)
    // left num for each
    MinutesleftNums.forEach(eachNum => {

        if (eachNum.classList.contains(`l${minuteTensValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')

        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })

    MinutesleftStrap.style.transform = `translateY(${translateYValue * -minuteTensValue}vmin)`;

    if (minuteTensValue === 0) {
        MinutesleftStrap.style.transform = `translateY(-${resetLeftStrapValue}px)`;

    }
}


// !right minute section
const MinutesrightStrap = document.querySelector('.MinutesrightStrap');
const MinutesrightNums = MinutesrightStrap.querySelectorAll('.r')
const MinutesresetRightStrapValue = document.querySelector('.neu-container').offsetHeight / 20

function setMinuteRightValue() {
    const date = new Date()
    const minuteOnesValue = date.getMinutes() % 10

    // left num for each
    MinutesrightNums.forEach(eachNum => {
        if (eachNum.classList.contains(`r${minuteOnesValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')

        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })

    MinutesrightStrap.style.transform = `translateY(${MinutestranslateYValue * -minuteOnesValue}vmin)`;

    if (minuteOnesValue === 0) {
        MinutesrightStrap.style.transform = `translateY(-${MinutesresetRightStrapValue}px)`;

    }
}


//  * Hours section
const HourstranslateYValue = '2';

// !left hour section
const HoursleftStrap = document.querySelector('.HoursleftStrap');
const HoursleftNums = HoursleftStrap.querySelectorAll('.l')
const HoursresetLeftStrapValue = document.querySelector('.neu-container').offsetHeight / 20

function setHourLeftValue() {
    const date = new Date();
    const hourTensValue = Math.floor(date.getHours() / 10)

    // left num for each
    HoursleftNums.forEach(eachNum => {

        if (eachNum.classList.contains(`l${hourTensValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')

        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })

    HoursleftStrap.style.transform = `translateY(${HourstranslateYValue * -hourTensValue}vmin)`;

    if (hourTensValue === 0) {
        HoursleftStrap.style.transform = `translateY(-${resetLeftStrapValue}px)`;

    }
}
// !right hour section
const HoursrightStrap = document.querySelector('.HoursrightStrap');
const HoursrightNums = HoursrightStrap.querySelectorAll('.r')
const HoursresetRightStrapValue = document.querySelector('.neu-container').offsetHeight / 20

function setHourRightValue() {
    const date = new Date()
    const hourOnesValue = date.getHours() % 10

    // left num for each
    HoursrightNums.forEach(eachNum => {
        if (eachNum.classList.contains(`r${hourOnesValue}`)) {
            eachNum.classList.add('border-4', 'w-[40px]', 'rounded-full')

        } else {
            eachNum.classList.remove('border-4', 'w-[40px]', 'rounded-full')
        }
    })

    HoursrightStrap.style.transform = `translateY(${MinutestranslateYValue * -hourOnesValue}vmin)`;

    if (hourOnesValue === 0) {
        HoursrightStrap.style.transform = `translateY(-${HoursresetRightStrapValue}px)`;

    }

}


function setTimeNeu() {

    // seconds
    setSecondLeftValue();
    setSecondRightValue();


    // minutes
    setMinuteLeftValue()
    setMinuteRightValue()


    // hours
    setHourLeftValue();
    setHourRightValue();

}

