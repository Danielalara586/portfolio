// // Sticky menu
let menu = null;
let menuHeight = null;
const sections = document.querySelectorAll('section');
const navigation = document.querySelectorAll('.nav_links a[href^="#"]');

window.addEventListener('load', () => {
    menu = document.getElementById('nav-menu');
    menu.classList.remove('menu-fixed');
    window.scrollTo(0, 0);
    menuHeight = menu.offsetTop;
});

window.addEventListener('scroll', () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (menuHeight && currentScroll >= menuHeight)
        menu.classList.add('menu-fixed');
    else
        menu.classList.remove('menu-fixed');

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


// let menu = document.getElementById('nav-menu');
// let height = menu.offsetTop;

// window.addEventListener('scroll', function() {
//     if (window.pageYOffset > height)
//         menu.classList.add('menu-fixed');
//     else
//         menu.classList.remove('menu-fixed');
// })

// // Section observer
// const menuLinks = document.querySelectorAll('.nav_links a[href^="#"]');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const id = entry.target.getAttribute('id');
//         const menuLink = document.querySelector(`.nav_links a[href="#${id}"]`)

//         if (entry.isIntersecting) {
//             document.querySelector('.nav_links a.selected').classList.remove('selected');
//             menuLink.classList.add('selected');
//         }


//     });
// }, { rootMargin: '-50% 0px -50% 0px' });

// menuLinks.forEach(menuLink => {
//     const hash = menuLink.getAttribute("href");
//     const target = document.querySelector(hash);
//     if (target)
//         observer.observe(target);
// })