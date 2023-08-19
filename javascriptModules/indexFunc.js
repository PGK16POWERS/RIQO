const demoBtn = document.querySelector("#exampleFeature");
const demoFeatureDiv = document.querySelector("#demo-feature-div");
const menuIcon = document.querySelector("#menu-bar");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");


demoBtn.addEventListener("click", ()=> {
    demoFeatureDiv.classList.toggle("showflex");
});

menuIcon.addEventListener("click", ()=> {
    menuIcon.style.display = "none";
    close.style.display = "block";
    nav.style.display = "block"

    close.addEventListener("click", ()=> {
        menuIcon.style.display = "block";
        close.style.display = "none";
        nav.style.display = "none"
    })
})
