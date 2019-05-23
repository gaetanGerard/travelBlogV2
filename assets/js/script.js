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


hamburger.addEventListener("click", openNavBar);

document.addEventListener("click", (evt) => {
    let targetElement = evt.target;
    let width = document.body.offsetWidth - targetElement.offsetWidth;

    if (width === 0) {
        console.log("offsetWidth = " + width);
        hamburger.classList.replace("closeHamburger", "hamburger");
        navGroupContainer.classList.remove("active");
    } else if (targetElement == navGroupContainer) {
        console.log("offsetWidth = " + width);
        return;
    }
    console.log("offsetWidth = " + width);
});
