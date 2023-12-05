const display = document.querySelector('.output')

const buttons = document.querySelectorAll('td')
const errorBox = document.querySelector('.error')

const specialChars = ["%", "*", "/", "-", "+", "="]

let output = ''

const calculate = (btnValue) => {
    display.focus()

    if (btnValue === '=' && output != '') {
        try {

            output = eval(output)
            output = output.toFixed(2)
        } catch (error) {

            errorBox.innerHTML = `INVALID INPUT :: ERROR CODE : ${error}`

        }
    } else if (btnValue === 'AC') {
        errorBox.innerHTML = ''
        output = '';
    } else if (btnValue === 'DEL') {
        errorBox.innerHTML = ''
        output = output.toString().slice(0, -1)
    } else {
        if (output === '' && specialChars.includes(btnValue)) return;
        output += btnValue;
        errorBox.innerHTML = ''
    }
    display.innerHTML = output;
}

buttons.forEach((button) => {

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});