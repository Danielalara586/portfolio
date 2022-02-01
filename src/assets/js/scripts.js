// Sticky menu
let menu = document.getElementById('nav-menu');
let height = menu.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > height)
        menu.classList.add('menu-fixed');
    else
        menu.classList.remove('menu-fixed');
})