const reviewPhrasesArray = [
    "This product is fantastic, and it exceeded my expectations. I would highly recommend it to anyone.",
    "The customer service was exceptional, and the features are incredible. I'm extremely satisfied.",
    "It's a game-changer for my workflow, and the design is sleek and stylish. Great value for the money.",
    "Outstanding performance and features. I can't believe how good this is. A must-have product for professionals.",
    "Impressive build quality and top-notch craftsmanship. It's worth every penny. I'm in love with this product.",
    "It's a game-changer for my business. I'm blown away by the quality. Great addition to my setup.",
    "I'm so glad I found this product. It's a perfect fit for my needs. The price is unbeatable.",
    "The design is second to none. I'm head over heels for this product. It's elevated my experience.",
    "This product has changed the game for me. It's an unparalleled value. I'm thoroughly pleased with it.",
    "It's an exceptional addition to my collection. I'm ecstatic about my purchase. A must-have for enthusiasts.",
    "The build quality is exceptional, and I'm loving every aspect of it. It's a perfect fit for my lifestyle.",
    "I'm amazed at the performance, and it's an investment in my future success. A stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my daily routine.",
    "I'm amazed at the performance. It's an investment in my future success. This product is a stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my daily routine.",
    "I'm amazed at the performance. It's an investment in my future success. This product is a stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my daily routine.",
    "I'm amazed at the performance. It's an investment in my future success. This product is a stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my daily routine.",
    "I'm amazed at the performance. It's an investment in my future success. This product is a stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my daily routine.",
    "I'm amazed at the performance. It's an investment in my future success. This product is a stroke of genius.",
    "I'm thankful for this purchase. It's worth every dollar. I'm a satisfied and loyal customer.",
    "The design is both functional and stylish. I'm deeply impressed by this product. It's taken my experience to the next level.",
    "I can't imagine life without it now. This product is a game-changer for me. I'm absolutely thrilled with my decision.",
    "It's an unparalleled value. I'm thoroughly pleased with it. It's an exceptional addition to my collection.",
    "This product is a true gem. I'm recommending it to everyone I know. The craftsmanship is impeccable.",
    "It's a game-changer for my routine. I'm impressed with the results. It's a great investment in my future.",
    "This product is pure genius. I'm grateful for this purchase. It's worth every cent.",
    "I'm a happy customer. The design is second to none. I'm head over heels for this product.",
    "It's elevated my experience. I can't imagine life without it now. This product is a game-changer for me.",
    "I'm overjoyed with my decision. It's the best value for the price. I'm thoroughly satisfied.",
    "It's a fantastic addition to my collection. I'm ecstatic about my purchase. It's a must-have for enthusiasts.",
    "I'm a devoted fan now. The build quality is exceptional. I'm loving every aspect of it.",
    "It's a perfect fit for my lifestyle. I'm thrilled with this product. It's a game-changer for my passion.",
    "The customer support is exceptional. It's exceeded all my hopes. This is an essential product.",
    "I'm delighted with my choice. It's an incredible value. I'm in awe of this product's capabilities.",
    "It's become an indispensable tool for me. I can't recommend it highly enough. This product is a game-changer in its category.",
    "I'm telling all my friends about it. The attention to detail is outstanding. It's transformed my"

];


function generateReviewText() {
    let text = '';
    const index = Math.round(Math.random() * reviewPhrasesArray.length)
    text = reviewPhrasesArray[index];
    return text;
}

let array = []
const image = document.querySelector('.image-wrapper img');
const text_wrapper = document.querySelector('.text-wrapper');
const name = text_wrapper.querySelector('.name')
const place = text_wrapper.querySelector('.location');
const review_text = text_wrapper.querySelector('.review-text')
const random_button = text_wrapper.querySelector('.random-button')


async function fetchApiData() {

    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }

        const data = await response.json()
        return data.results[0];

    } catch (error) {
        console.error('Fetch error:', error);
    }


}

function loadData() {
    fetchApiData()
        .then((data) => {
            image.setAttribute('src', data.picture.large)
            name.innerHTML = `${data.name.first}  ${data.name.last}`
            place.innerHTML = `${data.location.city},${data.location.country}`;
            review_text.innerHTML = generateReviewText()
        })
}


window.onload = function () {
    loadData()
}

random_button.addEventListener('click', loadData);



