// numbers
const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

// operator
const mod = document.querySelector('.mod')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const subtract = document.querySelector('.subtract')
const add = document.querySelector('.add')

const dot = document.querySelector('.dot')

// bracket
const bracket = document.querySelector('.bracket')

// operation
const backSpace = document.querySelector('.backSpace');
const clear = document.querySelector('.clear')
const output = document.querySelector('.output')
const blinker = document.querySelector('.blinker')
const equal = document.querySelector('.equal')

let text = ''
let bracketCounter = 0;
let isBracketActive = false;
// numbers
one.addEventListener('click', (e) => {
    isBracketActive = true
    addTextToOut('1')
})

two.addEventListener('click', (e) => {
    addTextToOut('2')
    isBracketActive = true


})
three.addEventListener('click', (e) => {
    addTextToOut('3')
    isBracketActive = false

})
four.addEventListener('click', (e) => {
    addTextToOut('4')
    isBracketActive = true

})
five.addEventListener('click', (e) => {
    addTextToOut('5')
    isBracketActive = true

})
six.addEventListener('click', (e) => {
    addTextToOut('6')
    isBracketActive = true

})
seven.addEventListener('click', (e) => {
    addTextToOut('7')
    isBracketActive = true

})
eight.addEventListener('click', (e) => {
    addTextToOut('8')
    isBracketActive = true

})
nine.addEventListener('click', (e) => {
    addTextToOut('9')
    isBracketActive = true
})
zero.addEventListener('click', (e) => {
    addTextToOut('0')
    isBracketActive = true
})


// operator
mod.addEventListener('click', (e) => {
    addTextToOut('%')
    isBracketActive = true
})
divide.addEventListener('click', (e) => {
    addTextToOut('/')
    isBracketActive = true
})
multiply.addEventListener('click', (e) => {
    addTextToOut('*')
    isBracketActive = true
})
subtract.addEventListener('click', (e) => {
    addTextToOut('-')
    isBracketActive = true
})
add.addEventListener('click', (e) => {
    addTextToOut('+')
    isBracketActive = true
})

dot.addEventListener('click', (e) => {
    if (!text.includes('.')) {
        addTextToOut('.')
    }
})

// bracket
bracket.addEventListener('click', (e) => {

    if (!isBracketActive) {
        ++bracketCounter;
        addTextToOut('(')

    } else {
        if (text == '') {
            addTextToOut('(')
            ++bracketCounter;
        } else {

            if (bracketCounter > 0) {
                addTextToOut(')')

                --bracketCounter;
            } else {
                addTextToOut('(')
                ++bracketCounter;

            }

            if (bracketCounter == 0) {
                isBracketActive = false
            }
        }

    }
})


// operation
clear.addEventListener('click', (e) => {
    clearText();
})


backSpace.addEventListener('click', (e) => {
    text = text.slice(0, text.length - 1);
    output.innerHTML = text
})

equal.addEventListener('click', (e) => {
    let arr = text.split('')
    calculate(arr)
})


function addTextToOut(num) {
    text += num;
    output.innerHTML = text

}

function clearText() {
    text = ''
    output.innerHTML = text
}


function calculate(arr) {
    let result = '';
    let operator = null;
    let operand = '';
    if (arr.length) {
        arr.forEach(op => {
            switch (op) {
                case '1':
                    operand += 1;
                    break;
                case '2':
                    operand += 2
                    break;
                case '3':
                    operand += 3
                    break;
                case '4':
                    operand += 4
                    break;
                case '5':
                    operand += 5
                    break;
                case '6':
                    operand += 6
                    break;
                case '7':
                    operand += 7
                    break;
                case '8':
                    operand += 8
                    break;
                case '9':
                    operand += 9
                    break;
                case '0':
                    operand += 0
                    break;
                case '%':
                    // operand 
                    operator = '%'
                    break;
                case '/':
                    operator = '/'
                    break;
                case '*':
                    operator = '*'
                    break;
                case '+':
                    operator = '+'
                    break;
                case '-':
                    operator = '-'
                    break;

                default:
                    break;
            }
        })

        console.log('operand', operand);
    }
}