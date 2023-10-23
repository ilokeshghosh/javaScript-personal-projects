const toggle = document.querySelector('#toggle')
const toggle_wrapper = document.querySelector('.toggle-wrapper');
const toggle_btn = document.querySelector('.toggle-btn')
const video = document.querySelector('.video')
const audio= document.querySelector('.audio')
const loader = document.querySelector(".loader-wrapper")


// video.addEventListener('loadedmetadata',()=>{
//     loader.style.display = 'none';
//     video.style.display = "flex";
//     video.play(); 
// })

// document.addEventListener('DOMContentLoaded',()=>{
//     loader.style.display = 'none';
// })




// Function to hide the loader
function hideLoader() {
    loader.style.display = 'none';
    video.style.display = 'flex';
}

// Check if video is ready to play
if (video.readyState >= 2) {
    hideLoader();
} else {
    video.addEventListener('canplay', hideLoader);
}


toggle_wrapper.addEventListener('change',(e)=>{
    if(toggle.checked){
        
        toggle_btn.classList.remove('left-[1px]')
        toggle_btn.classList.add('left-[35px]')
        toggle_wrapper.classList.add('bg-[#DAFFFB]')
        toggle_btn.innerHTML="||";
        video.play();
        audio.play()

    }else{

        toggle_btn.classList.remove('left-[35px]')
        toggle_btn.classList.add('left-[1px]')
        toggle_btn.innerHTML=`<i class="fas fa-play "></i>`;
        toggle_wrapper.classList.remove('bg-[#DAFFFB]')
        video.pause();
        audio.pause();
    }
})

