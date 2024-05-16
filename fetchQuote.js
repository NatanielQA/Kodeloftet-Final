async function fetchAndDisplayQuote() {
    try {
        // Proxy server URL
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        // Original API URL
        const apiUrl = 'https://zenquotes.io/api/quotes/';

        // Fetch the quote through the proxy server
        const response = await fetch(proxyUrl + apiUrl);

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
