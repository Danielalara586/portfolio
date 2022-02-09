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

// Skills bar hover
let skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(skillBar => {
    let bar = skillBar.querySelector('.skill-bar_percent');
    let percent = skillBar.querySelector('.percent');
    skillBar.onmouseover = function() {
        percent.style = 'width: 100%; color: #fff; transition: .8s; background: #0AC1C9';
        bar.style.background = '#0AC1C9';
        bar.style.transition = '.8s';
    }
    skillBar.onmouseout = function() {
        percent.style = 'width: 0%; transition: .8s';
        bar.style.background = '#c1c1c1';
        bar.style.transition = '.8s';
    }
});

// Portfolio filter
const filterButtons = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}