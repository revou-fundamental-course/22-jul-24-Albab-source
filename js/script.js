// bg index auto slide
var slideIndex = 0;
var cover = document.getElementsByClassName("cover");

function showIndex(n) {
    slideIndex = n;
    if (slideIndex >= cover.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = cover.length - 1};
    
    for (var i = 0; i < cover.length; i++) {
        cover[i].style.display = "none";
    }
    cover[slideIndex].style.display = "block";
}

function plusIndex(n) {
    showIndex(slideIndex + n);
}

function autoSlide() {
    plusIndex(1);
}

// Inisialisasi slide pertama
showIndex(0);

// Mulai auto-slide setiap 10 detik
setInterval(autoSlide, 10000);