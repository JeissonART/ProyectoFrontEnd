//Menu Superior*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//Formulario*/
console.log("Loading Javascript");

function sendForm(){
    console.log("Envio Formulario");

    let nameInfo = document.getElementById('nombre');
    let emailInfo = document.getElementById('correo');

    nameInfo = nameInfo.value
    emailInfo = emailInfo.value

    let personalInfo = {
        name: nameInfo,
        emailInfo
    }

    console.log(personalInfo);
}

let buttonForm = document.getElementById("formulario");

console.log(buttonForm)

buttonForm.addEventListener('click',sendForm)




