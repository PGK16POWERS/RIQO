const demoBtn = document.querySelector("#exampleFeature");
const demoFeatureDiv = document.querySelector("#demo-feature-div");
const header = document.querySelectorAll("#header")

header.forEach( header => { 

    const menuIcon = header.querySelector("#menu-bar");
    const close = header.querySelector("#close");
    const nav = header.querySelector("nav");

    menuIcon.addEventListener("click", ()=> {
        menuIcon.classList.add("shownone");
        nav.classList.add("showblock");
        close.classList.add("showblock");

        close.addEventListener("click", ()=> {
            close.classList.remove("showblock");
            menuIcon.classList.remove("shownone");
            nav.classList.remove("showblock");
        })
    })

    
})

demoBtn.addEventListener("click", ()=> {
    demoFeatureDiv.classList.toggle("showflex");
});