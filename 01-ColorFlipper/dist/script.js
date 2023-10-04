const button = document.querySelector('#button');
const randomColor = () => {
    // 16777215 is used because it represents the decimal equivalent of the hexadecimal color FFFFFF, which is the highest possible value for a 6-digit hexadecimal color code. 

    let color = Math.floor(Math.random()* 16777215).toString(16)
    return color;
}
const changeColor = (e) => {
    const color = randomColor();
    document.body.style.backgroundColor=`#${color}`
}
button.addEventListener('click', changeColor);