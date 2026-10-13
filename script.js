let quoteElement = document.getElementById("quote");

let authorElement = document.getElementById("author");

let button = document.getElementById("generateQuote");

let messageElement = document.getElementById("message");

let musicElement = document.getElementById("musicBackground");

async function getQuote() {
    button.disabled = true;

    if (musicElement.paused) {
        musicElement.play().catch((error) => {
            console.error("Could not play Music", error);
        });
    }

    try {
        let response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let quoteData = await response.json();

        quoteElement.textContent = quoteData.quote;
        authorElement.textContent = "— " + quoteData.author;



    } catch (error) {
        messageElement.textContent = "Could not load a quote. Please try again.";
        console.error(error);
    } finally {
        button.disabled = false;
    }
}


button.addEventListener("click",function () {

    getQuote();

});


