const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next');
const imageArray = document.querySelectorAll('.img');

let length = imageArray.length-1
console.log(length);
let index = 0


function handlePrev(e) {
    index-=1;
    console.log('handlePrev index :',index);
    if(index<0){
        console.log(' at index<length ',index);
        index=length;
    }

    setImage();

  
    // console.log(e.target);
}
prevBtn.addEventListener('click', (e) => handlePrev(e))


function handleNext(e) {
    index+=1;
    console.log('handleNext index :',length);
    if(index>length){
        console.log(' at index>length ',index);
        index = 0
    }
    

    setImage();
    
}

function setImage() {
    for(let i=0;i<=length;i++){
        if(index===i){
            imageArray[i].classList.remove('hidden')
            imageArray[i].classList.add('inline-block')
        }else{
            console.log(imageArray[i].classList);
            imageArray[i].classList.remove('inline-block')
            imageArray[i].classList.add('hidden')
        }
    }
}
nextBtn.addEventListener('click', (e) => handleNext(e))