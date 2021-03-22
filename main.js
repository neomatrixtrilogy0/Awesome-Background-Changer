const colors = ['green', 'red', 'rgb(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    //get random numbers to match index of colors Array (0-3)
    const randomNumber = Math.floor(Math.random() *colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
