export function kippa() {

const signNavLink = document.querySelector("#signUpbtnnav");
const creAccForm = document.querySelector(".form");

signNavLink.addEventListener("click",()=> {
    creAccForm.classList.toggle("showflex");
})
}