function imgSlider(anything){
    document.querySelector('.dunkin').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


// var textColorChange = new Color(".multiColor", {
//     strings : ["coder","youtuber","designer"],
//     loop : true,
//     typeSpeed : 100,
//     backSpeed : 80,
//     backDelay : 1500
// })