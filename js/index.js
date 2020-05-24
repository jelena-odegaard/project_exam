//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//Astronomy picture of the day

const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=lh80h9nRv18lfxOy9T6BUPRjYcGVGYU7RmDHhltH";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + apodUrl;

async function fetchApod() {
    try {
        const response = await fetch(corsEnabledUrl);
        const apod = await response.json();
        displayApod(apod);
    } catch (error) {
        console.log(error);
    }
}

fetchApod();

function displayApod(apod) {
    document.querySelector(".apod-title").innerHTML += apod.title
    document.querySelector(".apod-date").innerHTML += apod.date
    document.querySelector(".apod-container").innerHTML += `<img src = "${apod.url}">`
    document.querySelector(".apod-explanation").innerHTML += apod.explanation
}