document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to the API status endpoint
    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            const apiStatusDiv = document.querySelector('#api_status');
            if (data.status === 'OK') {
                // Add the 'available' class
                apiStatusDiv.classList.add('available');
            } else {
                // Remove the 'available' class
                apiStatusDiv.classList.remove('available');
            }
        })
        .catch(error => {
            console.error('Failed to fetch API status:', error);
        });
});
