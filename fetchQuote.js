async function fetchAndDisplayQuote() {
    try {
        // Fetch the quote from the API
        const response = await fetch('https://catfact.ninja/facts');

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        // Parseing JSON response
        const data = await response.json();

        // Extracting quote text
        const quoteText = data.data[0].fact;

        // Displaying quote
        document.getElementById('quoteContainer').textContent = quoteText;
    } catch (error) {
        // Log and handle errors
        console.error('Error fetching quote:', error);
    }
}

// Call the function to fetch and display the quote
fetchAndDisplayQuote();
