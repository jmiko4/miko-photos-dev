document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content into a specified element
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load the header and footer content
    loadContent("header.html", "header");
    loadContent("footer.html", "footy");
});
