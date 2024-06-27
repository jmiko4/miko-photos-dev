const images = gsap.utils.toArray('.myImg');
images.forEach(img => {
    gsap.from(img, {
        opacity: 0,
        y: 40
    })
    gsap.to(img, {
        scrollTrigger: img,
        opacity: 1,
        y: 0,
        once: true
        // duration: .

        // duration:1,
        // delay:.25,
        // scrollTrigger: {
        //     trigger: img,
        //     // gsap.fromTo('myImg',{opacity:0},{opacity:1,duration:1});
        //     scrub: true
        // }
    })

});

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
console.log(img);
img.forEach(modal_function);

function modal_function(item) {

    item.addEventListener("click", (e) => {

        clickedImg = e.target;
        modal.style.display = "block";
        console.log(clickedImg);
        modalImg.src = clickedImg.src;
        // captionText.innerHTML = this.alt;
    });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}