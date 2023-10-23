const toggle = document.querySelector('#toggle')
const toggle_wrapper = document.querySelector('.toggle-wrapper');
const toggle_btn = document.querySelector('.toggle-btn')
const video = document.querySelector('.video')
const audio= document.querySelector('.audio')
const loader = document.querySelector(".loader-wrapper")


document.addEventListener('DOMContentLoaded',()=>{
    loader.style.display = 'none';
})

toggle_wrapper.addEventListener('change',(e)=>{
    if(toggle.checked){
        
        toggle_btn.classList.remove('left-[1px]')
        toggle_btn.classList.add('left-[35px]')
        toggle_wrapper.classList.add('bg-[#DAFFFB]')
        toggle_btn.innerHTML="||";
        video.play();
        audio.play()

        // console.log('checked');
        // console.log(toggle_btn.classList);
    }else{

        toggle_btn.classList.remove('left-[35px]')
        toggle_btn.classList.add('left-[1px]')
        toggle_btn.innerHTML=`<i class="fas fa-play "></i>`;
        toggle_wrapper.classList.remove('bg-[#DAFFFB]')
        video.pause();
        audio.pause();
        // console.log('not checked');
        // console.log(toggle_btn.classList);
    }
    // console.log(toggle.checked === true);
})

