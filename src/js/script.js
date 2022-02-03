'use strict';

let menu = null;
let heightMenu = null;
const sections = document.querySelectorAll('section');
const navigation = document.querySelectorAll('.menu-links > a');

window.addEventListener('load', () => {
    menu = document.getElementById('menu');
    menu.classList.remove('stiky');
    window.scrollTo(0, 0);
    heightMenu = menu.offsetTop;
});

window.addEventListener('scroll', () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (heightMenu && currentScroll >= heightMenu) {
        menu.classList.add('stiky');
    } else {
        menu.classList.remove('stiky');
    }

    let currentSection = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (currentScroll >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navigation.forEach(option => {
        option.classList.remove('selected');

        if (option.getAttribute('href') === `#${currentSection}`) {
            option.classList.add('selected');
        }
    });
});


/* // Sticky menu
let menu = document.getElementById('nav-menu');
let height = menu.offsetTop;

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset, height);
    if (window.pageYOffset > height)
        menu.classList.add('menu-fixed');
    else
        menu.classList.remove('menu-fixed');
})

// Section observer
const menuLinks = document.querySelectorAll('.nav_links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav_links a[href="#${id}"]`)

        if (entry.isIntersecting) {
            document.querySelector('.nav_links a.selected').classList.remove('selected');
            menuLink.classList.add('selected');
        }


    });
}, { rootMargin: '-50% 0px -50% 0px' });

menuLinks.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target)
        observer.observe(target);
}); */