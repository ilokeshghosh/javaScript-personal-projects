function handleKeyPress(e) {
    const key = e.key;
    switch (key) {
        case 'i':
            handleI();
            break;
        case 'k':
            handleK();
            break;
        case 'j':
            handleJ();
            break;
        case 'h':
            handleH();
            break;
        case 'g':
            handleG();
            break;
        case 'b':
            handleB();
            break;
        case 'v':
            handleV();
            break;
        case 'f':
            handleF();
            break;
    }

}

// hihat open
function handleI() {
    document.querySelector('.I').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.hihat-open')
    audio.play();
    setTimeout(() => {
        document.querySelector('.I').style.transform = 'scale(1)';
    }, 100)
}

// hihat close
function handleK() {
    document.querySelector('.K').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.hihat-close')
    audio.play();
    setTimeout(() => {
        document.querySelector('.K').style.transform = 'scale(1)';
    }, 100)
}

// snare
function handleJ() {
    document.querySelector('.J').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.snare')
    audio.play();
    setTimeout(() => {
        document.querySelector('.J').style.transform = 'scale(1)';
    }, 100)
}

// high tom
function handleH() {
    document.querySelector('.H').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.tom-high')
    audio.play();
    setTimeout(() => {
        document.querySelector('.H').style.transform = 'scale(1)';
    }, 100)
}

// mid tom
function handleG() {
    document.querySelector('.G').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.tom-mid')
    audio.play();
    setTimeout(() => {
        document.querySelector('.G').style.transform = 'scale(1)';
    }, 100)
}

// kick1
function handleB() {
    document.querySelector('.B').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.kick1')
    audio.play();
    setTimeout(() => {
        document.querySelector('.B').style.transform = 'scale(1)';
    }, 100)
}

// kick2
function handleV() {
    document.querySelector('.V').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.kick2')
    audio.play();
    setTimeout(() => {
        document.querySelector('.V').style.transform = 'scale(1)';
    }, 100)
}

// floor/low tom
function handleF() {
    document.querySelector('.F').style.transform = 'scale(1.1)';
    const audio = document.querySelector('.tom-low')
    audio.play();
    setTimeout(() => {
        document.querySelector('.F').style.transform = 'scale(1)';
    }, 100)
}

// help box event listner
document.querySelector('.help-box').addEventListener('click',()=>{
    console.log('hover over hover over');
    document.querySelector('.lower-section').classList.toggle('lower-section-active')
})

document.querySelector('.help-box').addEventListener('mouseout',()=>{
    console.log('hover over hover over');
    document.querySelector('.lower-section').classList.remove('lower-section-active')
})

window.addEventListener('keypress', handleKeyPress)