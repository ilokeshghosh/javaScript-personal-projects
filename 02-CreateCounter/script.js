const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const counter = document.querySelector('.counter');
// console.log(decrement, increment);
let i = 0;

function setColor(i) {
    if (i < 0) {

        counter.style.color = 'red';
    } else if (i > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = 'black';
    }
}


increment.addEventListener('mousedown', (e) => {
    e.target.classList.add('hover');
    setTimeout(() => {
        e.target.classList.remove('hover');
    }, 100)
    i++;
    counter.innerHTML = i;
    setColor(i);

})

decrement.addEventListener('click', (e) => {
    e.target.classList.add('hover');
    setTimeout(() => {
        e.target.classList.remove('hover');
    }, 100)
    i--;
    
    counter.innerHTML = i;
    setColor(i);
})