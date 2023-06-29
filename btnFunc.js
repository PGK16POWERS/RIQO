export function tryDemoBtn() {
const demoRedirect = document.querySelector("#demobtn");
const demoSect = document.querySelector(".demo-sect");

demoRedirect.addEventListener("click", () => {
    demoSect.classList.toggle("showflex");
    demoRedirect.innerHTML = "Demo";
})
}

