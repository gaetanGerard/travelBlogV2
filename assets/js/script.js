// ! Fonction pour ouverture et fermeture de la navBar responside (smartphone, tablette portrait, tablette paysage)


let hamburger = document.getElementById('triggerHamburger');
let navGroupContainer = document.getElementById("navGroupContainer");
let popTrigger = document.getElementById("popTrigger");
let recTrigger = document.getElementById("recTrigger");
let populaire = document.getElementById("populaire");
let recent = document.getElementById("recent");

// * Fonction pour gérer l'ouverture et la fermeture du menu responsive

let openNavBar = () => {
    navGroupContainer.classList.toggle("active");
    if(navGroupContainer.classList.contains("active")) {
        hamburger.classList.replace("hamburger", "closeHamburger");
    }  else {
        hamburger.classList.replace("closeHamburger", "hamburger");
    }
};



// *
// *
// * Fonction pour gérer le défilement des tab post récent et populaire
// *
// * 


let showTabPop = () => {

    if(!populaire.classList.contains("active")) {
        populaire.classList.add("active");
        recent.classList.remove("active");
        popTrigger.classList.add("active");
        recTrigger.classList.remove("active");
    } 
};

let showTabRec = () => {

    if (!recent.classList.contains("active")) {
        recent.classList.add("active");
        populaire.classList.remove("active");
        recTrigger.classList.add("active");
        popTrigger.classList.remove("active");
    }
};



popTrigger.addEventListener("click", showTabPop);
recTrigger.addEventListener("click", showTabRec);

hamburger.addEventListener("click", openNavBar);

// ! event ayant pour but de fermer le menu responsive lorsque l'on clique en dehors du navbar

document.addEventListener("click", (evt) => {
    let targetElement = evt.target;
    let width = document.body.offsetWidth - targetElement.offsetWidth;

    if (width === 0 || width < 0 || width < 130) {
        console.log("offsetWidth = " + width);
        hamburger.classList.replace("closeHamburger", "hamburger");
        navGroupContainer.classList.remove("active");
    } else if (targetElement == navGroupContainer) {
        console.log("offsetWidth = " + width);
        return;
    }
    console.log("offsetWidth = " + width);
});
