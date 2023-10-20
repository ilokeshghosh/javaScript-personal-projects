const foods = [
    // breakfast
    { name: 'Disco Sunrise Pancakes', desc: 'Fluffy pancakes served with a burst of tropical fruits and a dollop of sunshine syrup.', price: 9.99, category: 'breakfast', url: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2FrZXN8ZW58MHx8MHx8fDA%3D' },

    { name: 'Eggs Benedict Extravaganza', desc: 'A delightful twist on a classic, featuring poached eggs dancing atop English muffins with a symphony of hollandaise sauce.', price: 12.99, category: 'breakfast', url: 'https://plus.unsplash.com/premium_photo-1663854478286-4313b556a12e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlbmVkaWN0JTIwZWdnc3xlbnwwfHwwfHx8MA%3D%3D' },

    { name: 'Cinnamon Swirl Delight', desc: 'A dreamy stack of cinnamon-infused French toast served with a cloud of whipped cream and a caramel drizzle.', price: 10.49, category: 'breakfast', url: 'https://images.unsplash.com/photo-1676813904981-5533bc307a5e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { name: 'Morning Glory Burrito', desc: 'A zesty blend of scrambled eggs, chorizo, black beans, and cheese wrapped in a sun-dried tomato tortilla.', price: 1.99, category: 'breakfast', url: 'https://images.unsplash.com/photo-1629450748686-c86699b710ac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJ1cnJpdG98ZW58MHx8MHx8fDA%3D' },

    // lunch
    {
        name: "California Dreamin' Salad", desc: 'A fresh garden medley with avocado, grilled chicken, and a tangy mango vinaigrette, sprinkled with toasted almonds.', price: 14.99
        , category: 'lunch', url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RHJlYW1pbiclMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D'
    },

    { name: 'Mouthwatering Mediterranean Wrap', desc: 'Savor the taste of the Mediterranean with grilled lamb, tabbouleh, and tzatziki sauce wrapped in warm pita bread.', price: 13.49, category: 'lunch', url: 'https://images.unsplash.com/photo-1542444256-164bd32f11fc?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { name: 'The Ultimate Veggie Burger', desc: 'A juicy veggie patty stacked high with avocado, arugula, and sriracha aioli on a toasted whole-grain bun.', price: 12.99, category: 'lunch', url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { name: 'Spicy Thai Noodle Bowl', desc: 'Satisfy your taste buds with rice noodles, shrimp, and fresh veggies in a fiery Thai chili sauce', price: 15.99, category: 'lunch', url: 'https://www.thespruceeats.com/thmb/MrmigxRLx35bLXQYVnIWPXK8TzQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thai-stir-fried-noodles-with-vegetables-3217111_hero_01-8f13deb4bcb84fca82f244a504b0d886.jpg' },


    // dinner
    { name: 'Prime Rib Perfection', desc: 'A succulent prime rib roast, aged to perfection, served with roasted garlic mashed potatoes and au jus.', price: 28.99, category: 'dinner', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJpYiUyMHJvYXN0fGVufDB8fDB8fHww' },

    { name: 'Seafood Symphony', desc: 'A symphony of shrimp, scallops, and lobster tails, harmonized with a white wine butter sauce, served over linguine.', price: 32.99, category: 'dinner', url: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { name: 'Mango Tango Mahi-Mahi', desc: 'Grilled mahi-mahi topped with a zesty mango salsa, accompanied by coconut rice and sautéed spinach.', price: 26.99, category: 'dinner', url: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4338_1531.jpg' },

    { name: 'Sizzling Cajun Ribeye', desc: 'A mouthwatering ribeye steak seasoned with bold Cajun spices, served with loaded baked potatoes and Cajun slaw.', price: 29.99, category: 'dinner', url: 'https://www.rockrecipes.com/wp-content/uploads/2012/06/Cajun-Spice-Rub-on-Rib-Eye-Steak.jpg' },

    // shakes
    { name: "Cookies 'n Cream Dream Shake", desc: 'A heavenly blend of crushed cookies and cream, topped with whipped cream and a chocolate drizzle.', price: 6.99, category: 'shakes', url: 'https://i2.wp.com/bakingmischief.com/wp-content/uploads/2020/03/baileys-cookies-and-cream-milkshake-picture.jpg' },

    { name: 'Banana Caramel Fusion Shake', desc: 'Creamy banana and rich caramel swirled together in a frosty shake, finished with caramelized banana slices.', price: 7.49, category: 'shakes', url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/1/24/0/RX-FNM-Book_Caramelized-Bananas_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382387484287.jpeg' },


    { name: 'Peanut Butter Pretzel Power Shake', desc: 'A powerhouse shake featuring creamy peanut butter, crushed pretzels, and a sprinkle of chocolate chips.', price: 7.99, category: 'shakes', url: 'https://i0.wp.com/www.peanutbutterandpeppers.com/wp-content/uploads/2014/05/Peanut-Butter-Banana-Chocolate-Chip-Smoothie-020a.jpg' },

    { name: 'Tropical Island Breeze Shake', desc: 'Escape to a tropical paradise with a blend of coconut, pineapple, and a hint of rum (non-alcoholic).', price: 8.49, category: 'shakes', url: 'https://www.eatwell101.com/wp-content/uploads/2019/12/Mango-Pineapple-Coconut-Milk-Smoothie.jpg' },


]

const card_container = document.querySelector('.card-container')
const all = document.querySelector('.all')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')
const shake = document.querySelector('.shake')



// functions
function classRemover(e) {
    let className = 'bg-[#E23E57]';
    all.classList.remove(className)
    breakfast.classList.remove(className)
    lunch.classList.remove(className)
    dinner.classList.remove(className)
    shake.classList.remove(className)

    if (e.target === undefined) {
        e.classList.add(className)
    } else {
        e.target.classList.add(className)
    }
}
function updaterFunction(updatedFoods, e) {

    while (card_container.firstChild) {
        card_container.removeChild(card_container.firstChild)
    }
    classRemover(e);
    updatedFoods.forEach(food => {
        // card-1
        const card_div = document.createElement('div')
        card_div.className = 'flex md:flex-row flex-col hover:shadow-black hover:shadow-lg transition md:w-1/3 w-[80%]  duration-800 m-h-[170px] rounded-lg gap-5    border-2  justify-center items-center p-2 text-white bg-center  bg-no-repeat'


        // image
        const img = document.createElement('img')
        img.setAttribute('src', food.url)
        img.setAttribute('height', '20px')
        img.setAttribute('width', '150px')
        img.className = 'border-2 md:max-w-[200px] md:w-1/3 w-full md:max-h-[140px] shadow-md shadow-black rounded-xl'

        // name and description
        const name_description = document.createElement('div')
        name_description.className = 'flex md:w-2/3 w-full flex-col justify-center items-center gap-2 w-[40%]'

        // name and price wrapper
        const name_price = document.createElement('div')
        name_price.className = "w-full flex justify-between items-center"

        // name
        const name_div = document.createElement('h2')
        name_div.className = "text-2xl capitalize font-bold w-full text-start"
        const food_name = document.createTextNode(food.name)
        name_div.appendChild(food_name);

        // price
        const price_div = document.createElement('p')
        price_div.className = "text-right  text-lg font-bold text-emerald-600 w-[25%]"
        const price = document.createTextNode(`$${food.price}`)
        price_div.appendChild(price);



        // description
        const desc_wrapper = document.createElement('p')
        desc_wrapper.className = "w-full text-left";
        const desc = document.createTextNode(food.desc)
        desc_wrapper.appendChild(desc);


        // appending child

        // name and price wrapper
        name_price.appendChild(name_div)
        name_price.appendChild(price_div)

        // name and description 
        name_description.appendChild(name_price)
        name_description.appendChild(desc_wrapper)


        // card-n
        card_div.appendChild(img)
        card_div.appendChild(name_description)


        // card container
        card_container.appendChild(card_div);

    })
}

function showAll(e) {
    updaterFunction(foods, e)
}

function showBreakfast(e) {
    const updatedFoods = foods.filter(food => food.category === 'breakfast')
    updaterFunction(updatedFoods, e)
}

function showLunch(e) {
    const updatedFoods = foods.filter(food => food.category === 'lunch');
    updaterFunction(updatedFoods, e)
}

function showDinner(e) {
    const updatedFoods = foods.filter(food => food.category === 'dinner')
    updaterFunction(updatedFoods, e)
}

function showShake(e) {
    const updatedFoods = foods.filter(food => food.category === 'shakes')
    updaterFunction(updatedFoods, e)
}

window.addEventListener('load', () => showAll(all));

all.addEventListener('click', showAll);
breakfast.addEventListener('click', showBreakfast);
lunch.addEventListener('click', showLunch);
dinner.addEventListener('click', showDinner);
shake.addEventListener('click', showShake);