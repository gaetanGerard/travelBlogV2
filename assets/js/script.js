// ! Fonction pour ouverture et fermeture de la navBar responside (smartphone, tablette portrait, tablette paysage)


let hamburger = document.getElementById('triggerHamburger');
let navGroupContainer = document.getElementById("navGroupContainer");

let openNavBar = () => {
    navGroupContainer.classList.toggle("active");
    if(navGroupContainer.classList.contains("active")) {
        hamburger.classList.replace("hamburger", "closeHamburger");
    }  else {
        hamburger.classList.replace("closeHamburger", "hamburger");
    }
};

let slideIndex = 1;

let plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let currentSlide = (n) => {
    showSlides(slideIndex = n);
}

let showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

showSlides();

hamburger.addEventListener("click", openNavBar);

document.addEventListener("click", (evt) => {
    let targetElement = evt.target;
    let width = document.body.offsetWidth - targetElement.offsetWidth;

    if (width === 0 || width < 0) {
        console.log("offsetWidth = " + width);
        hamburger.classList.replace("closeHamburger", "hamburger");
        navGroupContainer.classList.remove("active");
    } else if (targetElement == navGroupContainer) {
        console.log("offsetWidth = " + width);
        return;
    }
    console.log("offsetWidth = " + width);
});
