document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = '<h1>Photography Portfolio</h1>';
    } else {
        console.error('Element with id "header" not found.');
    }

    const footer = document.getElementById('footy');
    if (footer) {
        footer.innerHTML = '<p>&copy; 2023 Photography Portfolio</p>';
    } else {
        console.error('Element with id "footy" not found.');
    }
});
