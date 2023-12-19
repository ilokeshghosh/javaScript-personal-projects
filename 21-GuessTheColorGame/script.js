// window.addEventListener('load', generateColor)
window.addEventListener('load', () => setGameMode('hard'))
const cardBox = document.querySelector('.card-box');
let mode = 'hard'

let answer = '';

document.querySelector('.new-colors').addEventListener('click', () => {
    cardBox.innerHTML = '';
    generateColor()
})

// set mode
document.querySelector('.easy').addEventListener('click', (e) => setGameMode('easy'))
document.querySelector('.hard').addEventListener('click', (e) => setGameMode('hard'))

function setGameMode(modeName) {
    if (modeName === 'easy') {
        document.querySelector('.easy').style.backgroundColor = '#2C8E99'
        document.querySelector('.easy').style.color = 'white'

        document.querySelector('.hard').style.color = '#2C8E99'
        document.querySelector('.hard').style.backgroundColor = 'white'
        mode = 'easy'
        cardBox.innerHTML = '';
        generateColor()
    } else if (modeName === 'hard') {
        document.querySelector('.hard').style.backgroundColor = '#2C8E99'
        document.querySelector('.hard').style.color = 'white'

        document.querySelector('.easy').style.color = '#2C8E99'
        document.querySelector('.easy').style.backgroundColor = 'white'
        mode = 'hard'
        cardBox.innerHTML = '';
        generateColor()
    }
}

function generateColor() {

    if (mode === 'hard') {
        for (let i = 1; i <= 6; i++) {
            const r = Math.ceil((Math.random() * 255))
            const g = Math.ceil((Math.random() * 255))
            const b = Math.ceil((Math.random() * 255))
            const color = `rgb(${r},${g},${b})`
            const answer_place = Math.ceil(Math.random() * 6)
            if (answer_place === i) {
                document.querySelector('.color-hint').innerHTML = `RGB(${r},${g},${b})`
                const answer_card = document.createElement('div')
                answer_card.classList.add('color-card')
                answer_card.style.backgroundColor = color;
                answer = color;
                cardBox.appendChild(answer_card);
                console.log(answer_place);
                answer_card.addEventListener('click', () => checkColor(color))
                continue;
            } else {
                const card = document.createElement('div')
                card.classList.add('color-card')
                card.style.backgroundColor = color
                card.addEventListener('click', () => checkColor(color))
                cardBox.appendChild(card);
            }

        }
    } else if (mode === 'easy') {
        for (let i = 1; i <= 3; i++) {
            const r = Math.ceil((Math.random() * 255))
            const g = Math.ceil((Math.random() * 255))
            const b = Math.ceil((Math.random() * 255))
            const color = `rgb(${r},${g},${b})`
            const answer_place = Math.ceil(Math.random() * 6)
            if (answer_place === i) {
                document.querySelector('.color-hint').innerHTML = color
                const answer_card = document.createElement('div')
                answer_card.classList.add('color-card')
                answer_card.style.backgroundColor = color;
                answer = color;
                cardBox.appendChild(answer_card);
                console.log(answer_place);
                answer_card.addEventListener('click', () => checkColor(color))
                continue;
            } else {
                const card = document.createElement('div')
                card.classList.add('color-card')
                card.style.backgroundColor = color
                card.addEventListener('click', () => checkColor(color))
                cardBox.appendChild(card);
            }

        }
    }
}

function checkColor(color) {
    if (color === answer) {
        document.querySelector('.result').innerHTML = '🎉 you have win the game'
        document.querySelector('.upper-content').style.backgroundColor = answer
        setTimeout(() => {
            document.querySelector('.result').innerHTML = 'Restarting game...'
            cardBox.innerHTML = '';
            document.querySelector('.upper-content').style.backgroundColor = ''
            generateColor();

        }, 1000)
        setTimeout(() => {
            document.querySelector('.upper-content').style.backgroundColor = ''
            document.querySelector('.result').innerHTML = ''
        }, 1300)
    } else {
        document.querySelector('.result').innerHTML = '😟 you have lose the game'
        document.querySelector('.upper-content').style.backgroundColor = answer
        setTimeout(() => {
            document.querySelector('.result').innerHTML = 'Restarting game...'
            cardBox.innerHTML = '';
            generateColor();
        }, 1000)

        setTimeout(() => {
            document.querySelector('.upper-content').style.backgroundColor = ''
            document.querySelector('.result').innerHTML = ''
        }, 1300)
    }
}