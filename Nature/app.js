//prevent user from inspect page
/*document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});*/


//navbar 
const header = document.querySelector("header");
const sectionOne = document.querySelector(".intro-text");
//slide-in on scroll
const sliders = document.querySelectorAll(".slide-in");


//Preloader
function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:
preload([
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img3.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg'
]);


/***********Reveal On scroll intro-img********/
function fadeAppear() {
    const fade = document.querySelector('.fade-in');
    const fadePosition = fade.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fadePosition < screenPosition) {
        fade.classList.add('fade-in-appear')
    } else {
        fade.classList.remove('fade-in-appear')
    }
}
window.addEventListener('scroll', fadeAppear);


/***********Reveal On scroll intro-img1********/
function fade1Appear() {
    const fade1 = document.querySelector('.fade-in1');
    const fade1Position = fade1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade1Position < screenPosition) {
        fade1.classList.add('fade-in1-appear')
    } else {
        fade1.classList.remove('fade-in1-appear')
    }
}
window.addEventListener('scroll', fade1Appear);

/***********Reveal On scroll layout********/
function fade2Appear() {
    const fade2 = document.querySelector('.fade-in2');
    const fade2Position = fade2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade2Position < screenPosition) {
        fade2.classList.add('fade-in2-appear')
    } else {
        fade2.classList.remove('fade-in2-appear')
    }
}
window.addEventListener('scroll', fade2Appear);


/***********Reveal On scroll hover card********/
function fade3Appear() {
    const fade3 = document.querySelector('.fade-in3');
    const fade3Position = fade3.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade3Position < screenPosition) {
        fade3.classList.add('fade-in3-appear')
    } else {
        fade3.classList.remove('fade-in3-appear')
    }
}
window.addEventListener('scroll', fade3Appear);


/***********Reveal On scroll places-text********/
function fade4Appear() {
    const fade4 = document.querySelector('.fade-in4');
    const fade4Position = fade4.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade4Position < screenPosition) {
        fade4.classList.add('fade-in4-appear')
    } else {
        fade4.classList.remove('fade-in4-appear')
    }
}
window.addEventListener('scroll', fade4Appear);


/***********Reveal On scroll Explore text********/
function fade5Appear() {
    const fade5 = document.querySelector('.fade-in5');
    const fade5Position = fade5.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade5Position < screenPosition) {
        fade5.classList.add('fade-in5-appear')
    } else {
        fade5.classList.remove('fade-in5-appear')
    }
}
window.addEventListener('scroll', fade5Appear);


/***********Reveal On scroll Package text********/
function fade6Appear() {
    const fade6 = document.querySelector('.fade-in6');
    const fade6Position = fade6.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade6Position < screenPosition) {
        fade6.classList.add('fade-in6-appear')
    } else {
        fade6.classList.remove('fade-in6-appear')
    }
}
window.addEventListener('scroll', fade6Appear);


/***********Reveal On scroll Blog text********/
function fade7Appear() {
    const fade7 = document.querySelector('.fade-in7');
    const fade7Position = fade7.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade7Position < screenPosition) {
        fade7.classList.add('fade-in7-appear')
    } else {
        fade7.classList.remove('fade-in7-appear')
    }
}
window.addEventListener('scroll', fade7Appear);


/***********Reveal On scroll Book text********/
function fade8Appear() {
    const fade8 = document.querySelector('.fade-in8');
    const fade8Position = fade8.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    if (fade8Position < screenPosition) {
        fade8.classList.add('fade-in8-appear')
    } else {
        fade8.classList.remove('fade-in8-appear')
    }
}
window.addEventListener('scroll', fade8Appear);


//nav background on scroll color change
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//fade and slide-in on scroll
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


//Home Image Parallax
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".man", 3, { y: -100 });

let scene = new ScrollMagic.Scene({
        triggerElement: ".home-holder",
        duration: "100%",
        triggerHook: 0,
    })
    .setPin("")
    .setTween(timeline)
    .addTo(controller);


//burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

}
navSlide();
//Share
jQuery(".share").click(function() {
    jQuery(".listing").fadeToggle(600);
});
//Share1
jQuery(".share1").click(function() {
    jQuery(".listing1").fadeToggle(600);
});
//Share2
jQuery(".share2").click(function() {
    jQuery(".listing2").fadeToggle(600);
});

//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});