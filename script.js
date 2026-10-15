const quoteElement = document.getElementById("quote");

const authorElement = document.getElementById("author");

const button = document.getElementById("generateQuote");

const messageElement = document.getElementById("message");

const musicElement = document.getElementById("musicBackground");

const musicButton = document.getElementById("musicButton");

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
        messageElement.textContent = "";


    } catch (error) {
        messageElement.textContent = "Could not load a quote. Please try again.";
        console.error(error);
    } finally {
        button.disabled = false;
    }
}


button.addEventListener("click", function () {

    getQuote();

});


musicButton.addEventListener("click", function () {

    if (musicElement.paused) {
        musicElement.play();
        musicButton.textContent = "⏸";
    } else {
        musicElement.pause();
        musicButton.textContent = "▶";
    }
});



