// Variable init
const sections = document.querySelectorAll('section');
const navigation = document.querySelectorAll('.nav_links a[href^="#"]');
let menu = document.getElementById('nav-menu');
let height = document.querySelector('header').offsetHeight - 150;

function menuLoader() {
    if (window.pageYOffset > height)
        menu.style = 'opacity: 1; transition: .5s ease-in';
    else
        menu.style.opacity = '0';
}

// Loader
window.addEventListener('load', () => {
    menuLoader();

})

window.addEventListener('scroll', () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // Dynamic Menu
    menuLoader();

    let sectionId = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (currentScroll >= sectionTop - sectionHeight / 3)
            sectionId = section.getAttribute('id');

    });

    navigation.forEach(option => {
        option.classList.remove('selected');

        if (option.getAttribute('href') === `#${sectionId}`) {
            option.classList.add('selected');
        }
    });
});