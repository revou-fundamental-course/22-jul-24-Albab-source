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

// ====Form Validation

function formValidation(event) {
    event.preventDefault(); // Mencegah form submission default

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let formSelect = document.getElementById('formSelect').value; // Asumsikan id 'formSelect' untuk elemen select
    let errorMessages = [];

    // Pengecekan form value
    if (firstName === "") {
        errorMessages.push("Nama depan harus diisi");
    }
    if (lastName === "") {
        errorMessages.push("Nama belakang harus diisi");
    }
    if (formSelect === "") {
        errorMessages.push("Pilihan harus dipilih");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    } else {
        alert("Form berhasil dikirim");
        document.getElementById('formContact').reset();
    }
}

document.getElementById("form-submit").addEventListener("click", formValidation);