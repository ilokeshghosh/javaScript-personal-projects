const hamburger = document.querySelector('.hamburger')
const nav_menu  = document.querySelector('.sd-nav-menu')
const nav = document.querySelector('.nav-wrapper')
const hero = document.querySelector('.hero')
const scroll_top = document.querySelector('.scroll-top')
const footer_div = document.querySelector('.footer-section')
const footer = document.querySelector('.footer');

console.dir(footer);
// console.log(scroll_top);


let isActive=false

document.querySelector('.copy-write').innerHTML = `Lokesh Ghosh &copy; ${new Date().getFullYear()} All Right Reserved `


// scroll event listener
document.addEventListener('scroll',()=>{

    // footer 
    if(Math.ceil(scrollY) >= footer_div.offsetTop){
        footer.classList.add('bottom-0')
        footer.classList.remove('-bottom-40')
    }else{
        footer.classList.remove('bottom-0')
        footer.classList.add('-bottom-40')
    }

    // scroll to top 
    if(scrollY>hero.offsetHeight){
        scroll_top.classList.add('right-10')
        scroll_top.classList.remove('-right-20')
    }else{
        scroll_top.classList.remove('right-10')
        scroll_top.classList.add('-right-20')
    }

    // nav background 
    if(scrollY>nav.offsetHeight){
        nav.classList.add('bg-slate-600')
    }else{
        nav.classList.remove('bg-slate-600')
    }
})

hamburger.addEventListener('click',(e)=>{
    isActive = !isActive;
    isActive ? e.target.innerHTML= '&Cross;': e.target.innerHTML = '&equiv;';
    isActive ? nav_menu.classList.add("top-24") : nav_menu.classList.remove("top-24")
})