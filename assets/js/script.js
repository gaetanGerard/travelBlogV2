let hamburger = document.getElementById('triggerHamburger');
let navGroupContainer = document.getElementById("testId");

let testFunction = () => {
    navGroupContainer.classList.toggle("active");
}

hamburger.addEventListener("click", testFunction);

