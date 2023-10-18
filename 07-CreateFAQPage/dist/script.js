const btn = document.querySelector('.btn')
const answer = document.querySelector('.answer');
let active = false
// console.log(btn);
function toggleAnswer(e) {
    active = !active
    answer.classList.toggle('active', active)
    btn.classList.toggle('btn_active', active)
}

btn.addEventListener('click', toggleAnswer)