export function burgerMenu() {
   const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    
    nav.classList.toggle("show");
}); 
}

