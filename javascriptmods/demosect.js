export function demoVersion() {
const riqo = document.querySelector("#ri-qo");
const genBtn = document.querySelector("#gen-btn");

var quotes = [
    "When I said I loved you, I meant it.",
    "Two birds can't kill a stone, but you can break my heart.",
    "You are the star in my space.",
    "Vodka hits, but that ass McDonald's fries harder."
];

function randomPick() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

genBtn.addEventListener("click", () => {
    var genRanQuo = randomPick();
    riqo.innerHTML = genRanQuo;
});   
}



