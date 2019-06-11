let loginForm = document.getElementsByClassName("login");
let inputBox = document.getElementsByClassName("inputBox");
let input = document.getElementsByClassName("input");
let pseudo = document.getElementById("pseudo");
let submitBtn = document.getElementById("submitBtn");


// * Fonction pour vérifier la validiter de l'email renseigner

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
};

// DEBUT de Fonction pour vérifier si le champs est vide lorsque l'utilisateur  quitte le champs

let checkLoginData = (e) => {
    let errorMsg = e.parentElement.parentElement.lastElementChild;

    if(e.classList.contains("login") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer votre pseudo !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("login") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
        submitBtn.removeAttribute("disabled");
        return true;
    }

    if (e.classList.contains("password") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer votre Mot de passe !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("password") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
        submitBtn.removeAttribute("disabled");
        return true;
    }
};

let checkRecoveryData = (e) => {
    let errorMsg = e.parentElement.parentElement.lastElementChild;

    if (e.classList.contains("mail") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer votre adresse mail !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("mail") && validate(e.value) == false) {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer une adresse mail valide !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("mail") && validate(e.value) == true && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
        submitBtn.removeAttribute("disabled");
        return true;
    }  
};

let checkpasswordData = (e) => {
    let errorMsg = e.parentElement.parentElement.lastElementChild;
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    

    if (e.classList.contains("password") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer un mot de passe !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("password") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
        submitBtn.removeAttribute("disabled");
        return true;
    }

    if (e.classList.contains("confirmPassword") && password.value !== confirmPassword.value) {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Vos mots de passe doivent correspondre !";
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    } else if (e.classList.contains("confirmPassword") && password.value == confirmPassword.value) {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
        submitBtn.removeAttribute("disabled");
        return true;
    }
};
// FIN de Fonction pour vérifier si le champs est vide lorsque l'utilisateur  quitte le champs

// DEBUT de confirmation du formulaire

let valider = () => {
    let mail = document.getElementById("mail").value;
    let pseudo = document.getElementById("pseudo").value; 
    let password = document.getElementById("password").value; 
    let confirmPassword = document.getElementById("confirmPassword").value; 


    if (mail == "" || pseudo == "" || password == "" || confirmPassword == "" || password !== confirmPassword) {
        return false;
    }
    return true;
};

// FIN de confirmation du formulaire


// DEBUT d'animation du menu du back office

let backOfficeNav = document.getElementById("backOfficeNav");
let test = document.getElementById("test");

let toggleMenu = () => {
    if(backOfficeNav.classList.contains("sidebar")) {
        backOfficeNav.classList.remove("sidebar");
        test.style.gridTemplateColumns ="10.5em 1fr";
    } else {
        backOfficeNav.classList.add("sidebar");
        test.style.gridTemplateColumns = "4.5em 1fr";
    }
}

backOfficeNav.addEventListener("click", toggleMenu);