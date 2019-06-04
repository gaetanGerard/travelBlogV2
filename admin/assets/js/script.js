let loginForm = document.getElementsByClassName("login");
let inputBox = document.getElementsByClassName("inputBox");
let input = document.getElementsByClassName("input");
let pseudo = document.getElementById("pseudo");


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
    } else if (e.classList.contains("login") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
    }

    if (e.classList.contains("password") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer votre Mot de passe !";
    } else if (e.classList.contains("password") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
    }
};

let checkRecoveryData = (e) => {
    let errorMsg = e.parentElement.parentElement.lastElementChild;

    if (e.classList.contains("mail") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer votre adresse mail !";
    } else if (e.classList.contains("mail") && validate(e.value) == false) {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer une adresse mail valide !";
    } else if (e.classList.contains("mail") && validate(e.value) == true && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
    }  
};

let checkpasswordData = (e) => {
    let errorMsg = e.parentElement.parentElement.lastElementChild;
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    

    if (e.classList.contains("password") && e.value == "") {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Veuiller entrer un mot de passe !";
    } else if (e.classList.contains("password") && e.value !== "") {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
    }

    if (e.classList.contains("confirmPassword") && password.value !== confirmPassword.value) {
        errorMsg.style.visibility = "visible";
        errorMsg.innerHTML = "Vos mots de passe doivent correspondre !";
    } else if (e.classList.contains("confirmPassword") && password.value == confirmPassword.value) {
        errorMsg.style.visibility = "hidden";
        errorMsg.innerHTML = "";
    }
};
// FIN de Fonction pour vérifier si le champs est vide lorsque l'utilisateur  quitte le champs