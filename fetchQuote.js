async function fetchAndDisplayQuote() {
    try {
        // Fetch the quote from the API
        const response = await fetch('https://zenquotes.io/api/quotes/');

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        // Parse JSON response
        const data = await response.json();

        // Extract quote text
        const quoteText = data[0].q;

        // Display quote
        document.getElementById('quoteContainer').textContent = quoteText;
    } catch (error) {
        // Log and handle errors
        console.error('Error fetching quote:', error);
    }
}

// Call the function to fetch and display the quote
fetchAndDisplayQuote();
