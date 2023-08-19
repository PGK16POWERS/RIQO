const riqo = document.querySelector(".innerhtml");
const genBtn = document.querySelector("#gen-test-btn");

var quotes = [
    "When I said I loved you, I meant it.",
    "Two birds can't kill a stone, but you can break my heart.",
    "You are the star in my space.",
    "My words carried the weight of my affection when I confessed my love to you.",
    "Just as two birds cannot shatter a stone, my heart is fragile in your hands.",
    "In the galaxy of my emotions, you shine as the brightest star.",
    "Just as shadows yield to dawn, your presence fades but lingers in my heart.",
    "You exist in my life like a supernova, bursting with beauty and brilliance.",
    "Amidst the chaos of life, your love remains my constant North Star.",
    "In the tapestry of emotions, your thread is the most vibrant and profound.",
    "Whispers of your name dance within the chambers of my heart.",
    "As time flows, your memory remains an untouched masterpiece in my mind.",
    "The sound of your laughter soothes my soul.",
    "Just as the stars paint the night sky, your essence colors my world.",
    "Your voice is the compass guiding me through life's uncharted melodies."
];

function randomPick() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

genBtn.addEventListener("click", () => {
    var genRanQuo = randomPick();
    riqo.innerHTML = genRanQuo;
}); 