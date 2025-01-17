const image = document.querySelectorAll('img');

const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },options  

);

pimages.forEach(image => {
    io.observe(image);
});