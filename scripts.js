
document.addEventListener("DOMContentLoaded", function() {
    fetchCatImage();
});

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        const catImageUrl = data[0].url;
        document.getElementById('catImage').src = catImageUrl;
    })
    .catch(error => {
        console.error('There was an error fetching the cat image:', error);
    });
}
