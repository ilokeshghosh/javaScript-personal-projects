const noddle_btn = document.querySelector('.noodle')
const rice_btn = document.querySelector('.rice')
const burger_btn = document.querySelector('.burger')
console.log(burger_btn)

// content
const noodle_content = document.querySelector('.noodle-content')
const rice_content = document.querySelector('.rice-content')
const burger_content = document.querySelector('.burger-content')

// image
const noodle_img = document.querySelector('.noodle-img ')
const rice_img = document.querySelector('.rice-img')
const burger_img = document.querySelector('.burger-img')


// hover:bg-white border hover:border-slate-600 hover:text-black
//  ['text-white',  'bg-slate-600'] [text-white  bg-slate-600]
//  ['bg-white ','border','border-slate-600', 'text-black'] [bg-white border border-slate-600 text-black]
noddle_btn.addEventListener("click", (e) => {
    console.log('noodle');

    // button
    rice_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    rice_btn.classList.add('text-white', 'bg-slate-600')
    burger_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    burger_btn.classList.add('text-white', 'bg-slate-600')
    noddle_btn.classList.add('bg-white', 'border', 'border-slate-600', 'text-black')


    rice_content.classList.add('hidden')
    burger_content.classList.add('hidden')
    rice_img.classList.add('hidden')
    burger_img.classList.add('hidden')


    noodle_content.classList.add('flex')
    noodle_content.classList.remove('hidden');
    noodle_img.classList.add('inline-block');
    noodle_img.classList.remove('hidden');
    console.log(noodle_content);


})
rice_btn.addEventListener("click", (e) => {

    // button
    noddle_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    noddle_btn.classList.add('text-white', 'bg-slate-600')
    burger_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    burger_btn.classList.add('text-white', 'bg-slate-600')
    rice_btn.classList.add('bg-white', 'border', 'border-slate-600', 'text-black')

    noodle_content.classList.add('hidden')
    burger_content.classList.add('hidden')
    noodle_img.classList.add('hidden')
    burger_img.classList.add('hidden')


    rice_content.classList.add('flex')
    rice_content.classList.remove('hidden');
    rice_img.classList.add('inline-block');
    rice_img.classList.remove('hidden');
})
burger_btn.addEventListener("click", (e) => {

    // button
    rice_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    rice_btn.classList.add('text-white', 'bg-slate-600')
    noddle_btn.classList.remove('bg-white', 'border', 'border-slate-600', 'text-black')
    noddle_btn.classList.add('text-white', 'bg-slate-600')
    burger_btn.classList.add('bg-white', 'border', 'border-slate-600', 'text-black')

    rice_content.classList.add('hidden')
    noodle_content.classList.add('hidden')
    noodle_img.classList.add('hidden')
    rice_img.classList.add('hidden')

    burger_content.classList.add('flex')
    burger_content.classList.remove('hidden');
    burger_img.classList.add('inline-block');
    burger_img.classList.remove('hidden');
})