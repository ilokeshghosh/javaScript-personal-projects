const qa_sections = document.querySelectorAll('.qa-sections')
const add_btn = document.querySelector('.add-btn');
const add_question = document.querySelector('.add-question');
const submit= document.querySelector('.submit')
const qa_wrapper = document.querySelector('.qa-wrapper')


// console.log(submit);

// console.log(add_btn);
// console.log(qa_sections);

let activeAnswer = null;
let activeButton = null;

qa_sections.forEach(section => {


    let answer = section.querySelector('.answer')
    let btn = section.querySelector('.btn')
    let active = false




    btn.addEventListener('click', (e) => {
        // active = !active;
        // answer.classList.toggle('active', active);




        if (activeAnswer !== answer) {
            if (activeAnswer && activeButton) {
                activeAnswer.classList.remove('active');
                activeButton.classList.remove('btn_active')
            }
            active = true;
            answer.classList.add('active');
            btn.classList.add('btn_active')
            activeAnswer = answer;
            activeButton = btn;
        } else {
            active = !active;
            answer.classList.toggle('active', active);
            btn.classList.toggle('btn_active', active)
        }


    })

    // section.addEventListener('mouseleave', (e) => {
    //     answer.classList.remove('active');
    //     active = false;
    // })

})


// add question 
add_btn.addEventListener('click',(e)=>{
    add_btn.classList.toggle('add-btn-active')
    add_question.classList.toggle('add-question-active');
})


