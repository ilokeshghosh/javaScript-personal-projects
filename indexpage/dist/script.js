const cards = [...document.querySelectorAll('.card')];

function addClass(e){
    console.log(e);
   const desc = e.currentTarget.querySelector('.desc-container')
desc.classList.add('active');
    
}

function removeClass(e){
    const desc = e.currentTarget.querySelector('.desc-container')
    desc.classList.remove('active');
    
}
cards.forEach(card=>card.addEventListener('mouseenter',addClass))
cards.forEach(card=>card.addEventListener('mouseleave',removeClass))
