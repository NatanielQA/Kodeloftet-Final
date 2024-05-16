async function fetchAndDisplayImage() {
    try {
        // Fetch the image from the API
        const response = await fetch('https://zenquotes.io/api/image/author/');

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        // Get image blob
        const imageBlob = await response.blob();

        // Create URL for the image blob
        const imageUrl = URL.createObjectURL(imageBlob);

        // Create image element
        const imageElement = document.createElement('img');

        // Set image source
        imageElement.src = imageUrl;

        // Append image to container
        document.getElementById('imageContainer').appendChild(imageElement);
    } catch (error) {
        // Log and handle errors
        console.error('Error fetching image:', error);
    }
}

// Call the function to fetch and display the image
fetchAndDisplayImage();