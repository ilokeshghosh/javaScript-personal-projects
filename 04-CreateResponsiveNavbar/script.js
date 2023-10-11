const hamLogo = document.querySelector('.ham-wrapper span');
const hamContent =  document.querySelector('.ham-content-wrapper');

// console.log(hamLogo);


function toggleHam(e) {
    if (hamLogo.innerHTML === '≡') {
        hamLogo.innerHTML = '&Cross;';
        hamContent.style.transform = 'translateY(115px)';
    } else {
        hamLogo.innerHTML = '≡';
        hamContent.style.transform = 'translateY(-100%)';
    }
   
    
}
hamLogo.addEventListener('click', toggleHam)