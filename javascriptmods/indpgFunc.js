const textBlock = document.querySelectorAll(".faq-block");

textBlock.forEach(block => {
    const h3Header = block.querySelector(".faq3-header");
    const paragraph = block.querySelector(".local-para");

    h3Header.addEventListener("click", ()=> {
        paragraph.classList.toggle("showblock")
    })
})

//alert("Connected")

