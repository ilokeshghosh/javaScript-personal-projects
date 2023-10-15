const cross = document.querySelector('.cross');
const hamburger = document.querySelector('.hamburger')
const side_nav = document.querySelector('.side-nav');

let active =false;
cross.addEventListener('click',()=>{
    side_nav.classList.remove('active');
})

function toggleSideNav(){
    
    active= !active
    if(active){
        side_nav.classList.add('active');

    }else{
        side_nav.classList.remove('active');
       

    }
}

hamburger.addEventListener('click', toggleSideNav)