let body = document.getElementsByTagName('body')[0];
let navbar = document.getElementById('navbar');
let hero = document.querySelector('.hero');
let heroHeight = hero.offsetHeight;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > heroHeight - 200) {
    navbar.classList.add('shadow');
    navbar.style.backgroundColor = "rgba(27, 36, 52,1)"
    } else {
    navbar.classList.remove('shadow');
    navbar.style.backgroundColor = "rgba(27, 36, 52,.7)"
    }
});

const accordionBtn = document.getElementById('accordionButton');

const rotateIcon = () => {
    addEventListener('click', function() {
    const icon = document.getElementById('polygonIcon');
    icon.classList.toggle('rotate');
    this.classList.toggle('shadow-accordion');
});
}

let carouselWidth = $(".carousel-inner")[0].scrollWidth;
let cardWidth = $(".carousel-item").width();
let scrollPosition = 0;

let multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    $(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
    });

    $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
        );
    }
    });
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}

let carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    wrap: false,
});
