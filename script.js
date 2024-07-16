let menu = document.querySelector('.menu')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    menu.classList.toggle('move');
    navbar.classList.toggle('open-nav');
}) 