const quote = [
    {fact: "Cats are the best", length: "17"},
    {fact: "Cats have four legs", length: "21"}
]

// Fetched quote variable. Spesificly object nr 1. Spesificly the key quote.
console.log(quote[1].fact);


async function quoteGenerator() {
    // HENT
    const response = await fetch("https://zenquotes.io/api/image/author/"); 
    console.log(response)  

    // MODIFISER
    const quoteDataData = await response.json();

    // Send
    console.log(quoteData.data[0].fact); 
};

quoteGenerator()