const btn = document.querySelector('.btn');
const cross = document.querySelector('.cross')
const modal_card = document.querySelector('.modal-card')
const modal_content = document.querySelector('.modal-content')

let isModalOpen = false;
function changeModal(e) {
    isModalOpen = !isModalOpen

    // if (isModalOpen) {
    //     modal_card.classList.add('hidden');
    //     modal_card.classList.remove('flex');


    //     modal_content.classList.remove('hidden');
    //     modal_content.classList.add('flex','bg-slate-700');
    //     document.body.classList.add('backdrop-blur-lg')

        
       
    
    // } else {
    //     modal_card.classList.remove('hidden')
    //     modal_card.classList.add('flex')

    //     modal_content.classList.add('hidden')
    //     modal_content.classList.remove('flex')
    //     document.body.classList.remove('backdrop-blur-lg')
    // }


    modal_card.classList.toggle('hidden', isModalOpen);
    modal_card.classList.toggle('flex', !isModalOpen)

    modal_content.classList.toggle('hidden', !isModalOpen)
    modal_content.classList.toggle('flex', isModalOpen)

    document.body.classList.toggle('backdrop-blur-lg', isModalOpen);
    // modal_content.classList.toggle('bg-slate-700',isModalOpen)

}
btn.addEventListener('click', changeModal);
cross.addEventListener('click', changeModal)
